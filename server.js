const express = require('express')
const app = express();
const port = process.env.PORT || 8080
const contenedor = require('./archivos')
const Archivos = new contenedor('productos.json')
const server = app.listen(port, () => {
    console.log(`servidor escuchando en el puerto: ${server.address().port}`)
})
server.on("error", error => console.log(`Error en Servidor ${error}`))

app.get('/', (req, res) => {
    res.send(`<h1>Desafio de Servidor con Express </h1>
    <li><a href="/productos">Productos</a></li>
                <li><a href="/productoRandom">ProductoRandom</a></li>`)
})

app.get('/productos', (req, res) => {
    res.header('Content-Type', 'application/json; charset=UTF8')
    Archivos.getAll()
        .then((producto) => res.send(producto))
})
app.get('/productoRandom', (req, res) => {
    res.header('Content-Type', 'application/json; charset=UTF8')
    Archivos.getRandom()
        .then((productoRandom) => res.send(productoRandom))
})