let http = require('http')
let porta = 5000

const produtos = [
    {
        nome: 'Bolu de morango', valor: 1000
    }
]

const requestHandler = (req, res) => {
    res.setHeader('Acess-Control-Allow-Origin', "*")
    return res.end(JSON.stringify(produtos))
}

const server = http.createServer(requestHandler)

server.listen(porta, function(){ //Porta e função anônima; //Crie um servidor http e utilize a rota.. 
    console.log(`Servidor rodando na porta ${porta}`)
})

