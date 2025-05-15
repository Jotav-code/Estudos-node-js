const fs = require("fs");
const path = require("path");

//criar pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
    if (error) {
        return console.log("Erro: ", error)
    }
    return "Pasta criada com sucesso"
})

//Criar arquivo

fs.writeFile(path.join(__dirname, "/teste", "arquivo.txt"), "oi", (error) => {
    if (error) {
        return console.log("erro", error);
    }
    console.log("Arquivo criado");
})
fs.appendFile(path.join(__dirname, "/teste", "arquivo.txt"), "ola", (error) => {
    if (error) {
        return console.log("erro", error);
    }
    console.log("Arquivo criado");
})

//ler arquivo

fs.readFile(path.join(__dirname, "/teste", "arquivo.txt"), "utf8", (error,data) => {
    if (error) {
        return console.log("erro", error);
    }
    console.log(data);
})