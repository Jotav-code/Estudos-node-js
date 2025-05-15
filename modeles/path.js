const path = require('path')

//nome do arquivo atual
console.log(path.basename(__filename))

//nome do diretorio atual
console.log(path.dirname(__filename))

//nomde da extensão atual
console.log(path.extname(__filename))

//criar objeto path
console.log(path.parse(__filename))

//juntar caminhos
console.log(path.join(__dirname,"test"))