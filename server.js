const express = require('express')
const res = require('express/lib/response')
const app = express()

app.use(express.json())

const skis = [
    {
        id: 1,
        brand: "K2",
        model: "Kung Fuja",
        type: "powder",
        length: 175
    }
]

app.get("/api/skis", (req, res) => {
  res.send({skis: skis})
})

app.post("/api/skis", (req,res) => {
    const data = req.body
    data.id = skis.length+1
    skis.push(data)
    res.send(data)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))