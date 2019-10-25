const tarefas = require("../models/tarefas.json")

exports.get = (req, res) => {
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const reqId = tarefas.find(item => item.id == id)

    if (!reqId) return res.status(204).send('Tarefa não encontrado')
    
    res.status(200).send(reqId)
}

exports.getConcluido = (req, res) => {
    const concluido = tarefas.filter(item => item.concluido == "true")
    res.status(200).send(concluido)
}

exports.getNome = (req, res) => {
    const nome = tarefas.map(item => item.nomeColaborador)
    res.status(200).send(nome)
}

exports.getNomeId = (req, res) => {
    const id = req.params.id
    const nomeId = tarefas.find(item => item.id == id)
    const nomeFunc = nomeId.nomeColaborador
    res.status(200).send(nomeFunc)
}



exports.getOrdem = (req, res) => {
    const ordenados = tarefas.sort(function(a, b) {
        return new Date(a.dataInclusao) - new Date(b.dataInclusao)
    })
    res.status(200).send(ordenados)
}