const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.send("<h1>hello Ross</h1>")
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))