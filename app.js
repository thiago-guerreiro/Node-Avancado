const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const buscaLetra = require('./src/functions/buscaLetra')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// declarando que vou usar o ejs
app.set('view engine', 'ejs')
// Mostrando para o express onde ta minha pasta views
app.set('views', './src/views')

// renderizando minha pagina principal
app.get('/', (req, res) => {
  // chamando o arquivo da minha view
    res.render('index')
})

// pegando os dados da minha view
app.post('/envia-letra', async (req, res) => {
    const { artist, music } = req.body
    const resultado = await buscaLetra(artist, music)

    res.render('resultado', {data: resultado})
})

app.listen(3333, () => {
  console.log('Servidor ativo na porta 3333')
})
