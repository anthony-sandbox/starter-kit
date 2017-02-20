/**
 * bin/www
 * @module path
 * @module http
 * @module chalk
 * @module app
 */

const path          = require('path');
const http          = require('http');
const dotenv        = require('dotenv');
const chalk         = require('chalk');
const open          = require('open');
const localtunnel   = require('localtunnel');
const app           = require('../app');

/**
 * Load enviornment variables
 */

dotenv.load();
dotenv.config(path.resolve('.env-' + process.env.NODE_ENV));

/**
 * Create server
 */
const server = http.createServer(app);

/**
 * Server Listening to default port
 */

server.listen(process.env.PORT, process.env.HOST, (err)=>{

    /**
     * Handle Error
     */

    if(err){
        console.log(chalk.red(err));
    }
    
    /**
     * Get Server address host and port
     */

    const addr      = server.address();
    const addrHost  = addr.address;
    const addrPort = addr.port;
    
    const tunnel = localtunnel(addrPort,{"subdomain": process.env.APP_NAME},(err, tunnel)=>{
        if(err){
            console.log('%s Localtunnel returned an error %s', chalk.red('x'), err);
        } else {        
            console.log('%s Local App is running at %s:%d in %s mode', chalk.green('✓'), addrHost, addrPort, process.env.NODE_ENV);
            console.log('%s External URL %s', chalk.green('✓'), tunnel.url);
            console.log('Press CTRL-C to stop\n');   
        }
        console.log(tunnel.url);
        open(tunnel.url);
    });

    tunnel.on('close', function(){
       console.log('%s External URL has been closed', chalk.green('✓')) ;
    });
});