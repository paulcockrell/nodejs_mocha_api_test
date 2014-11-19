const server = require('restify').createServer()

module.exports.StartServer = StartServer

function StartServer() {
    server.listen(8080, function() {
        console.log('%s listening at %s', server.name, server.url)
    })

    server.get('/hello/:name', respond)

    function respond(req, res, next) {
        res.contentType = 'application/json'
        res.send({ code: 200, message: 'hello' + req.params.name })
        res.end()
    }
}