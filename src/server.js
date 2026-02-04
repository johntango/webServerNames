const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for submitted entries
const entries = [];
let nextId = 1;

app.use(express.json());
app.use(express.static('public'));

app.post('/api/entries', (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  const entry = {
    id: nextId++,
    name: name.trim(),
    email: email.trim(),
    password,
    createdAt: new Date().toISOString(),
  };

  entries.push(entry);
  res.status(201).json({ message: 'Entry recorded successfully.', entry });
});

app.get('/api/entries', (req, res) => {
  res.json({ entries });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
