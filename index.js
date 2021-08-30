const express = require('express')
const connection = require('./connection')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

const produtos = require('./routes/produtos')

const dependencies = {
    connection
}

const path = require('path')
const port = process.env.PORT || 3000
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/public')));

app.use(produtos(dependencies))

connection.connect(() => {
    app.listen(port, () => console.log('Crud girando'))
})