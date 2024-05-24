const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//Configuração do Handlebars
const hbs = exphbs.create({
  /*opções*/
})
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

//Rota de exemplo
app.get("/", (req, resp) => {
  resp.render("home")
})

app.get("/registrar", (req, resp) => {
  resp.render("signup")
})

app.get("/contatos", (req, resp) => {
  resp.render("contatos")
})

app.set("view engine", "handlebars")
app.use(express.static("public"))

//Inicia o servidor
const port = 3333

app.listen(port, () => {
  console.log(`
    ✅ - Servidor online 
  
    🎈 - Rotas
    
    🔎 - http://localhost:${port}/
    🔎 - http://localhost:${port}/registrar
    🔎 - http://localhost:${port}/contatos
  `)
})
