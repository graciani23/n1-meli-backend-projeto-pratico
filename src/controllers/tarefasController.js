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

<<<<<<< HEAD
exports.getNomeColab = (req, res) => {
    const nome = req.params.nome
    const nomeColab = tarefas.filter(item => item.nomeColaborador == nome)
    res.status(200).send(nomeColab)
}



function transformarConclusaoEmData(conclusao) {
    const conclusaoSplitada = conclusao.split('/')
    const conclusaoNova = new Date(conclusaoSplitada[2], conclusaoSplitada[1] - 1, conclusaoSplitada[0])
    return conclusaoNova
=======
exports.getNomeId = (req, res) => {
    const id = req.params.id
    const nomeId = tarefas.find(item => item.id == id)
    const nomeFunc = nomeId.nomeColaborador
    res.status(200).send(nomeFunc)
}

<<<<<<< HEAD
tarefas.sort(function(a, b) {
    if (a.dataInclusao > b.dataInclusao) {
        return 1;
    }
    if (a.dataInclusao < b.dataInclusao) {
        return -1;
    }
    return 0;
})

console.log(tarefas)
=======
function FormataStringData(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
>>>>>>> 736c468aadd6f7a43a55017e95dc1b7019803116
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

>>>>>>> 1edf3bc8e70b4a2570d5b0d0c675f23c8b4e45d2
