const express = require('express')
const produtosController = require('../controllers/produtos')

const produtosRouter = ({ connection }) => {
    const router = express.Router()
    router.get('/', produtosController.index.bind(null, connection))
    router.get('/cadastrar', produtosController.cadastrar)
    router.post('/cadastrar', produtosController.cadastrarProcesso.bind(null, connection))
    router.get('/:id', produtosController.deleteProduto.bind(null, connection))
    router.get('/editar/:id', produtosController.editar.bind(null, connection))
    router.post('/editar/:id', produtosController.editarProduto.bind(null, connection))
    return router

}
module.exports = produtosRouter