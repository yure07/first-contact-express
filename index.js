const express = require('express')
const app = express()

app.use(express.json())

const vechiles = []

app.get('/vechiles', (req, res) => {
    res.status(200).send({vechiles: vechiles})
    console.log({vechiles: vechiles})
})

app.get('/vechiles/:id', (req, res) => {
    const vechileId = req.params.id
    const vechileFounded = vechiles.find(vechile => vechile.id == vechileId)
    res.status(200).send(vechileFounded)
    console.log(vechileFounded)
})

app.post('/vechiles', (req, res) =>{
    res.status(200).send(req.body)
    vechiles.push(req.body)
    console.log(req.body)
})

app.put('/vechiles/:id', (req, res) => {
    const vechileId = req.params.id
    const vechileToEdit = vechiles.find(vechile => vechile.id == vechileId)
    const indexVechile = vechiles.indexOf(vechileToEdit)
    vechiles[indexVechile] = req.body
    res.status(200).send('veiculo foi atualizado')
    console.log(req.body)
})

app.delete('/vechiles/:id', (req, res) => {
    const vechileId = req.params.id
    const vechileToDelete = vechiles.find(vechile => vechile.id == vechileId)
    const indexVechile = vechiles.indexOf(vechileToDelete)
    vechiles.splice(indexVechile, 1)
    res.status(200).send(`veiculo de id ${vechileId} foi deletado com sucesso`)
})

app.listen('3000', () => {
    console.log('Servidor está aberto na porta 3000')
})