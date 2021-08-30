const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from produtos', (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

const cadastrarProduto = (connection, { nome, marca, quantidade, valor, codigo }) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into produtos(nome, marca, quantidade, valor, codigo) value('${nome}','${marca}','${quantidade}','${valor}','${codigo}')`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const deleteProduto = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(`delete from produtos where id = ${id} limit 1`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const findOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from produtos where id = ${id}`, (err, results) => {
            if (err) reject(err);
            else {
                if (results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve({})
                }
            }
        })
    })
}

const editarProduto = (connection, id, { nome, marca, quantidade, valor, codigo }) => {
    return new Promise((resolve, reject) => {
        connection.query(`update produtos set nome = '${nome}', marca = '${marca}', quantidade = '${quantidade}', valor = '${valor}', codigo = '${codigo}' where id = ${id}`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

module.exports = {
    findAll,
    cadastrarProduto,
    deleteProduto,
    findOne,
    editarProduto
}