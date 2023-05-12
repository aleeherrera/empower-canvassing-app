const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'canvassing_app',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database!');
});

// Define the API routes here

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Create a new canvassing note
app.post('/api/canvassing', (req, res) => {
  const { name, notes } = req.body;
  const query = 'INSERT INTO canvassing_notes (name, notes) VALUES (?, ?)';
  const values = [name, notes];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error creating a new note:', err);
      res.status(500).json({ error: 'Error creating a new note' });
      return;
    }

    res.json({ message: 'Note created successfully' });
  });
});
