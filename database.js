import sqlite3 from 'sqlite3';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const db = new sqlite3.Database('data.db'); // Creates a file-based SQLite database

// Create table if not exists
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT,
    address TEXT,
    product TEXT,
    price INTEGER,
    quantity INTEGER,
    totalPrice INTEGER,
    orderDate TEXT
  )`);
});

// API endpoint to save data
app.post('/api/save-data', (req, res) => {
  const { userName, address, product, price, quantity, totalPrice, orderDate } = req.body;

  const stmt = db.prepare(`INSERT INTO orders (userName, address, product, price, quantity, totalPrice, orderDate) VALUES (?, ?, ?, ?, ?, ?, ?)`);
  stmt.run(userName, address, product, price, quantity, totalPrice, orderDate, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Data saved successfully' });
  });
  stmt.finalize();
});

// API endpoint to retrieve data
app.get('/api/get-data', (req, res) => {
  db.all('SELECT * FROM orders', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ data: rows });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
