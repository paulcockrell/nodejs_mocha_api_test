const restify = require('restify')
,      assert = require('assert')
,       mocha = require('mocha')
,        chai = require('chai')
,      should = chai.should()
,      expect = chai.expect

before(function(done) {
    require('../start_server').StartServer()
    done()
})