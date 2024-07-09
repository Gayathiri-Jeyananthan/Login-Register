// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log('User data received:', { username, email, password });

  // Here, you would typically handle user data (e.g., store it in a database)
  res.json({ message: 'User signed up successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
