const db = require('./dbConcessionaria')
const dbVechiles = db.veiculosDatabase()
const express = require('express')
const app = express()

app.use(express.json())

app.get('/vechiles', async (req, res) => {
    const vechiles = await dbVechiles.list()
    res.status(200).send(vechiles)
})

app.get('/vechiles/:id', async (req, res) => {
    const vechile = await dbVechiles.get(req.params.id)
    res.status(200).send(vechile)
})

app.post('/vechiles', async (req, res) =>{
    const vechileToPost = await dbVechiles.insert(req.body)
    res.status(200).send(vechileToPost)
})

app.put('/vechiles/:id', async (req, res) => {
    const vechileUpdated = await dbVechiles.update(req.body, req.params.id)
    res.status(200).send(vechileUpdated)
})

app.delete('/vechiles/:id', async (req, res) => {
    const vechileToDelete = await dbVechiles.del(req.params.id)
    res.status(200).send(vechileToDelete)
})

app.listen(3000, () => {
    console.log('Servidor está aberto na porta 3000')
})