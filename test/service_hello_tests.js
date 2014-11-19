const    chai = require('chai')
,      should = chai.should()
,      expect = chai.expect
,      client = require('restify').createJsonClient({
                    version: '',
                    url: 'http://127.0.0.1:8080'
                })

describe('service: HELLO', function() {
    describe('200 response check', function() {
        describe('Regular JS test', function() {
            it('should get a 200 response', function(done) {
                client.get('/hello/world', function(err, req, res, data) {
                    if(err)
                        throw new Error(err)

                    // JS
                    if(data.code != 200)
                        throw new Error('Invalid response from /hello/world')

                    done()
                })
            })
        })
        describe('Chai#should test', function() {
            it('should get a 200 response', function(done) {
                client.get('/hello/world', function(err, req, res, data) {
                    // chai.should
                    data.code.should.equal(200)

                    done()
                })
            })
        })
        describe('Chai#expect test', function() {
            it('should get a 200 response', function(done) {
                client.get('/hello/world', function(err, req, res, data) {
                    // chai.expect
                    expect(data.code).to.equal(200)

                    done()
                })
            })
        })
    })

    describe('Message response check', function() {
        describe('Regular JS test', function() {
            it('should respond with helloworld', function(done) {
                client.get('/hello/world', function(err, req, res, data) {
                    if(err)
                        throw new Error(err)

                    // JS
                    if(data.message != 'helloworld')
                        throw new Error('Expected /hello/world to respond with \'helloworld\'')

                    done()
                })
            })
        })
        describe('Chai#should test', function() {
            it('should respond with helloworld', function(done) {
                client.get('/hello/world', function(err, req, res, data) {
                    // chai.should
                    data.message.should.equal('helloworld')

                    done()
                })
            })
        })
        describe('Chai#expect test', function() {
            it('should get a 200 response', function(done) {
                client.get('/hello/world', function(err, req, res, data) {
                    // chai.expect
                    expect(data.message).to.equal('helloworld')

                    done()
                })
            })
        })
    })
})