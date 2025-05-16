//Criando server
const http = require("http");

const port = 8080;
// req é o objeto da requisição
const server = http.createServer((req , res) =>{
    if(req.url == "/home"){
        res.writeHead(200, { "Content-Type" : "text/html" });
        res.end('<h1>Home page</h1>'); 
    }

    if(req.url == "/users"){
        const users = [
            {
                name: "joao vitor",
                email: "jojota@gmail.com",
            },
            {
                name: "luiz",
                email: "luiz@biano",
            },
        ]
        res.writeHead(200, {"Content" : "application/json"});
        res.end(JSON.stringify(users))
    }
})
//para colocar o server online
server.listen(port, ()=> console.log(`Rodando na porta ${port}`))