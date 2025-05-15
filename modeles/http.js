//Criando server
const http = require("http");

const port = 8080;
// req é o objeto da requisição
const server = http.createServer((req , res) =>{
    if(req.url == "/home"){
        res.writeHead(200, { "Content-Type" : "test/html" });
        res.end('<h1>Home page<h1>');

    }
})
//para colocar o server online
server.listen(port, ()=> console.log(`Rodando na porta ${port}`))