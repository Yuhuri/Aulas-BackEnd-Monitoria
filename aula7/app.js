import http from "node:http"

const server = http.createServer((request, response) => {
    console.log(`Requisiação recebida? ${request.method} para: ${request.url}`)

    response.setHeader('Content-Type', "text/html; charset=utf-8")

    response.writeHead(200)

    response.write("<h1>Olá Mundo! </h1>")
    response.write("<p> Teste servidor node.js</p>")

    response.end()
})

server.listen(5000, () =>{
    console.log("servidor rodando em http://localhost5000")
})