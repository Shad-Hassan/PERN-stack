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
app.post("/items", async (req, res) => {
  try {
    const { product_name, in_stock, purchase_price, minimum_sell_price, sold_at } = req.body;

    // Insert data into the items table
    const newItem = await pool.query(
      "INSERT INTO items (product_name, in_stock, purchase_price, minimum_sell_price, sold_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [product_name, in_stock, purchase_price, minimum_sell_price, sold_at]
    );

    // Send back the inserted item
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error, could not create item" });
  }
});
// fetch items
app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// get a specific item
app.get("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Query the database for the item with the specified id
    const item = await pool.query("SELECT * FROM items WHERE item_id = $1", [id]);

    // Check if the item exists
    if (item.rows.length === 0) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Return the found item
    res.json(item.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error, could not retrieve item" });
  }
});

// update items

// delete items


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})