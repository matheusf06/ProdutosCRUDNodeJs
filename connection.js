const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'estoque_nodejs'
})

module.exports = connection