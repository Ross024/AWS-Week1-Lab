const express = require('express')
const res = require('express/lib/response')
const app = express()
app.use(express.json())
app.use(express.static('build'))

const books = ["Fires of Heaven", "Three Day Road", "The Hobbit"]

app.get("/api/books", (req, res) => {
  res.send(books)
})

app.post("/api/books", (req,res) => {
    const bookName = req.body.name
    books.push(bookName)
    res.send(req.body)
})

app.get('*', (req, res) => {
    res.sendFile('build/index.html');
  });

const port = process.env.PORT || 8090
app.listen(port, () => console.log(`listening on port ${port}`))