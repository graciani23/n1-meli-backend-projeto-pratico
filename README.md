# Projeto prático de API
## Semana 7 {reprograma}
Manipulação de array de objetos sendo possível filtrar as informações por tarefas, tarefas concluídas, tarefas por id.

### Tecnologias utilizadas:
- JavaScript;
- Framework express para gerenciamento das requisições;
- Ferramenta nodemon para atualização da aplicação cada vez que um arquivo do projeto for modificado;
- Ferramenta postman para testar as requisições.

Foram criados os seguinte endpoints:

router.get('/tarefas', controller.get);<br />
router.get('/tarefas/concluido', controller.getConcluido);<br />
router.get('/tarefas/nome', controller.getNome);<br />
router.get('/tarefas/:id', controller.getById);<br />
router.get('/tarefas/:id/colaborador', controller.getNomeId);<br />

