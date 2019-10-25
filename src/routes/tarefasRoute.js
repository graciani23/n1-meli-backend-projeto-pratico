const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get('/tarefas', controller.get)
router.get('/tarefas/decrescente', controller.getOrdemDecrescente)
router.get('/tarefas/concluido', controller.getConcluido)
router.get('/tarefas/nome', controller.getNome)
router.get('/tarefas/:id', controller.getById)
router.get('/tarefas/:nome', controller.getNomeColab)



module.exports = router