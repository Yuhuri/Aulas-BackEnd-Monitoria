import http from "node:http"

const server = http.createServer ( (request, response) => {
    const {url, method} = request
    
    response.setHeader('Content-Type', "text/html; charset=utf-8")

    if(url == "/"){
        response.writeHead(200) // 200 = Okay
        response.end("<h1> Bem vindo à página inicial do site!!!!!!! WIPIEEEE YIPIEEE</h1> <p> Tente acessar /aula /projeto ou /admin")

    } else if (url == "/aula"){
        response.writeHead(200)
        response.end("<h1>Cade o stop</h1>")

    } else if (url == "/projeto"){
        response.writeHead(200)
        response.end("<h1>Não sei que projeto é esse</h1>")

    } else if(url == "/admin"){
        response.writeHead(403)
        response.end("<h1>Se você não for admin, não deveria estar aqui</h1>")

    } else{
        response.writeHead(404)
        response.end("<h1>Essa é uma página secreta, ooooo, não era pra você estar aqui, oooo</h1>")
        
        window.location.href("https://localhost:5000/");

    }
})

server.listen(5000, ()=>{
    console.log("Servidor rodando em http://localhost:5000")
})