const express = require("express");
const app = express()
const port = process.env.PORT || 5000;
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// routes
// post items
app.post("/items", async(req, res) => {
  try {
    console.log(req.body)
  }
  catch (err) {
    console.error(err.message)
  }
})
// fetch items

// update items

// delete items


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})