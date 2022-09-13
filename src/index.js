const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { router } = require("./posts")

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/posts", router)

const port = +process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

module.exports = { app }
