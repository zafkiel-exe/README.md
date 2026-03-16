const express = require("express")

const router = express.Router()

router.post("/attack",(req,res)=>{

const damage = Math.floor(Math.random()*100)

res.json({

damage:damage

})

})

module.exports = router
