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

exports.getNomeId = (req, res) => {
    const id = req.params.id
    const nomeId = tarefas.find(item => item.id == id)
    const nomeFunc = nomeId.nomeColaborador
    res.status(200).send(nomeFunc)
}

function FormataStringData(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }

exports.getOrdem = (req, res) => {
    const ordenados = tarefas.sort(function(a, b) {
        return FormataStringData(a.dataInclusao) - FormataStringData(b.dataInclusao)
    })
    res.status(200).send(ordenados)
}

