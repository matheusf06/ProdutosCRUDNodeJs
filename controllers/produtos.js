const connection = require('../connection')
const produtos = require('../models/produtos')

const index = async(connection, req, res) => {
    const result = await produtos.findAll(connection)
    res.render('home', { produtos: result })
}

const cadastrar = (req, res) => {
    res.render('cadastrar')
}

const cadastrarProcesso = async(connection, req, res) => {
    await produtos.cadastrarProduto(connection, req.body)
    res.redirect('/')
}

const deleteProduto = async(connection, req, res) => {
    await produtos.deleteProduto(connection, req.params.id)
    res.redirect('/')
}

const editar = async(connection, req, res) => {
    const produto = await produtos.findOne(connection, req.params.id)
    res.render('editar', { produto })
}

const editarProduto = async(connection, req, res) => {
    await produtos.editarProduto(connection, req.params.id, req.body)
    res.redirect('/')
}


module.exports = {
    index,
    cadastrar,
    cadastrarProcesso,
    deleteProduto,
    editar,
    editarProduto
}