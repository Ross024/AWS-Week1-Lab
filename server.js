const express = require('express')
const res = require('express/lib/response')
const app = express()

app.use(express.json())

const books = ["Fires of Heaven", "Three Day Road", "The Hobbit"]

app.get("/api/books", (req, res) => {
  res.send(books)
})

app.post("/api/books", (req,res) => {
    const bookName = req.body.name
    books.push(bookName)
    res.send(req.body)
})

const port = process.env.PORT || 8090
app.listen(port, () => console.log(`listening on port ${port}`))