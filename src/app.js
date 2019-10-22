const express = require("express")
const app = express()

app.all('*', function(req, res, next) {
    console.log('passamos pelo app')
    next()
})

// rota

const index = require('./routes/index')
const tarefas = require('./routes/tarefasRoute')

app.use('/', index)
app.use('/', tarefas)

module.exports = app



