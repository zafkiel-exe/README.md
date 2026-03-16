const express = require("express")

const players = require("./routes/players")
const combat = require("./routes/combat")

const app = express()

app.use(express.json())

app.use("/players",players)
app.use("/combat",combat)

app.use(express.static("web"))

app.listen(3000,()=>{

console.log("Quantum RPG Engine Running")

})
