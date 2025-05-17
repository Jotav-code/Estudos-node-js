//Criando express
const express = require('express')
//para criar user
const UserModel = require('../src/models/user.models')

const app = express()
//sinalizar que vamos usar arquivo json
app.use(express.json())
//para utilizar a biblioteca que usa html
app.set("view engine", "ejs")
app.set("views", "./src/views")

const port = 8080;

//inicia antes de todos
app.use((req, res, next)=>{
    console.log(`Request Type: ${req.method}`)
    console.log(`Content Type: ${req.headers["Content-type"]}`)
    console.log(`Date: ${new Date()}`)

    next()
})
//para enviar uma view
app.get("/views/users", async (req , res)=>{
    const users = await UserModel.find({})
    res.render("index", {users})
})


// app.get('/home', (req, res)=>{
//     res.contentType('application/html')
//     res.status(200).send("<h1>Hello world</h1>")
// })
app.get('/users', async (req , res)=>{
    try{
        const users = await UserModel.find({})
        res.status(200).json(users)
    } catch(error){
        return res.status(500).send(error.message)
    }
})
//buscar usuarios pelo id

app.get('/users/:id', async (req , res)=>{
    try{
        const id = req.params.id;

        const user = await UserModel.findById(id)
        res.status(201).json(user)

    } catch(error){
        res.status(500).send(error.message)
    }
})

//Criando usuer no banco de dados 
app.post("/users", async (req , res)=>{

    try{
        
        const user = await UserModel.create(req.body)
        res.status(201).json(user)

    } catch(error){
        res.status(500).send(error.message)
    }

})
//atualizar user
app.patch('/users/:id', async (req , res)=>{
    try{
        const id = req.params.id
        const users = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).send(users)
    }catch(error){
        res.status(500).send(error.message)
    }
})
//deletar
app.delete('/users/:id', async (req, res)=>{
    try {
        const id = req.params.id

        const user = await UserModel.findByIdAndDelete(id)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(port,()=> console.log(`Rodando com express na porta ${port}`));