const express = require("express")
const routes = express.Router() //! Vai ser responsavel pelas rotas

const teachers = require("./teachers")


routes.get("/", function(req, res) {
  return res.redirect("/teachers")
})

routes.get("/teachers", function(req, res) {
  return res.render("teachers/index")
})

routes.get("/teachers/create", function(req, res) {
  return res.render("teachers/create")
})

routes.post("/teachers", teachers.post)


module.exports = routes //! Vai exportar as rotas para o server.js