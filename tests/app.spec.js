/**
 * Import modules
 */

var chai = require('chai')
var request = require('supertest')
var app = require('../app')

var expect = chai.expect

describe('API Tests', function () {
  it('Should return statuscode 200', function (done) {
    request(app)
            .get('/')
            .end(function (err, res) {
              expect(res.statusCode).to.equal(200)
              done()
            })
  })
})
