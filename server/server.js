const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./src/routes")

app.use(express.json())
app.use("/", router)

app.use(express.json())
const corsOptions = {
  origin: "http://localhost:3000",
}
app.use(cors(corsOptions))

port = 5000 || process.env.PORT
app.listen(port, () => {
  console.log("Server has started")
})

module.exports = app
