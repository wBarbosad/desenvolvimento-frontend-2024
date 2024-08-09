const express = require('express') //Requerindo o artefato/pacote express
const app = express() //Inicializar o express por meio de outra variavel
const porta = 5000


let produtos = [
    {
        nome: "Bolo de morango",
        valor: 200,
        descricao: "Melhor bolo de morango do mundo",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w005FAb-mv5-7dZWRUuSdGhNe456deymNA&s"
    },
    {
        nome: "Bolo de cenoura",
        valor: 300, 
        descricao: "Muito bom",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXfCQhA1VDwTZQU5npVmPCNF4rMcjPajB0g&s"
    }
]
app.listen(porta, function(){
    console.log(`Servidor rondando na porta ${porta}`)
}) //A API vai ficar ouvindo as alterações na porta 5000 --> localhost:5000

app.get('/', (req, res) => {
    try{
        return res.json(produtos).status(200)
    }catch(error){
        return res.json({message: "Operacao inválida"}).status(400)
    }
}) //Entrar na rota '/' pelo método get, vou "ativar a função, disparar a função"
app.get('/jogos', (req, res) => {
    let queryUrl = req.query

    return res.json(queryUrl).status(200)
})