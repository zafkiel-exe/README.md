const express = require("express")

const router = express.Router()

const players = [

{name:"Knight",level:10},
{name:"Mage",level:7}

]

router.get("/",(req,res)=>{

res.json(players)

})

module.exports = router
