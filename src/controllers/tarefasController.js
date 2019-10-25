const tarefas = require("../models/tarefas.json")

exports.get = (req, res) => {
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    res.status(200).send(tarefas.find(item => item.id == id))
}

exports.getConcluido = (req, res) => {
    const concluido = tarefas.filter(item => item.concluido == "true")
    res.status(200).send(concluido)
}

exports.getNome = (req, res) => {
    const nome = tarefas.map(item => item.nomeColaborador)
    res.status(200).send(nome)
}


exports.getNomeColab = (req, res) => {
    const nome = req.params.nome
    const nomeColab = tarefas.filter(item => item.nomeColaborador == nome)
    res.status(200).send(nomeColab)
}



function transformarConclusaoEmData(conclusao) {
    const conclusaoSplitada = conclusao.split('/')
    const conclusaoNova = new Date(conclusaoSplitada[2], conclusaoSplitada[1] - 1, conclusaoSplitada[0])
    return conclusaoNova

exports.getNomeId = (req, res) => {
    const id = req.params.id
    const nomeId = tarefas.find(item => item.id == id)
    const nomeFunc = nomeId.nomeColaborador
    res.status(200).send(nomeFunc)
}

function transformarInclusaoEmData(inclusao) {
    const inclusaoSplitada = inclusao.split('/')
    const inclusaoNova = new Date(inclusaoSplitada[2], inclusaoSplitada[1] - 1, inclusaoSplitada[0])
    return inclusaoNova
}

function tempoParaConclusaoEmDias(concluido, incluido) {
    const diasEmMilissegundos = 86400000
    return (concluido - incluido) / diasEmMilissegundos
}

exports.getOrdemDecrescente = (req, res) => {
    tarefas.forEach(item => item.dataInclusao = transformarInclusaoEmData(item.dataInclusao))

    tarefas.forEach(item => item.dataConclusao = transformarConclusaoEmData(item.dataConclusao))

    tarefas.forEach(item => item.tempoConclusao = tempoParaConclusaoEmDias(item.dataConclusao, item.dataInclusao))

    tarefas.sort((a, b) => {
        return (b.dataInclusao - a.dataInclusao)
    })
    res.status(200).send(tarefas)
}