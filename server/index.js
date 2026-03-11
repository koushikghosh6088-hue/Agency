const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ─── In-memory stores (replace with MongoDB in production) ───
let contacts = [];
let portfolioItems = [
  { id: '1', title: 'AI Sales Dashboard', description: 'Real-time AI analytics platform', techStack: ['React', 'Node.js', 'TensorFlow'], category: 'AI', createdAt: new Date().toISOString() },
  { id: '2', title: 'E-Commerce Marketplace', description: 'Full-stack marketplace solution', techStack: ['Next.js', 'MongoDB', 'Stripe'], category: 'Web', createdAt: new Date().toISOString() },
  { id: '3', title: 'Health & Fitness App', description: 'Cross-platform mobile app', techStack: ['React Native', 'Firebase'], category: 'Mobile', createdAt: new Date().toISOString() },
  { id: '4', title: 'Workflow Automation Suite', description: 'Enterprise automation platform', techStack: ['Python', 'Node.js', 'APIs'], category: 'Automation', createdAt: new Date().toISOString() },
];

// ─── Contact / Lead Routes ───

// Submit contact form
app.post('/api/contacts', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  const contact = {
    id: Date.now().toString(),
    name, email, phone, message,
    createdAt: new Date().toISOString(),
    status: 'new',
  };
  contacts.push(contact);
  res.status(201).json({ message: 'Contact submitted successfully!', contact });
});

// Get all leads (admin)
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// Export leads as CSV
app.get('/api/contacts/export', (req, res) => {
  const csv = [
    'ID,Name,Email,Phone,Message,Status,Created',
    ...contacts.map(c => `${c.id},"${c.name}","${c.email}","${c.phone || ''}","${c.message}",${c.status},${c.createdAt}`)
  ].join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
  res.send(csv);
});

// ─── Portfolio Routes ───

// Get all portfolio items
app.get('/api/portfolio', (req, res) => {
  const { category } = req.query;
  let items = portfolioItems;
  if (category && category !== 'All') {
    items = items.filter(item => item.category === category);
  }
  res.json(items);
});

// Add portfolio item (admin)
app.post('/api/portfolio', (req, res) => {
  const { title, description, techStack, category } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }
  const item = {
    id: Date.now().toString(),
    title, description, techStack: techStack || [], category: category || 'Web',
    createdAt: new Date().toISOString(),
  };
  portfolioItems.push(item);
  res.status(201).json(item);
});

// Update portfolio item (admin)
app.put('/api/portfolio/:id', (req, res) => {
  const { id } = req.params;
  const index = portfolioItems.findIndex(item => item.id === id);
  if (index === -1) return res.status(404).json({ error: 'Portfolio item not found.' });

  portfolioItems[index] = { ...portfolioItems[index], ...req.body };
  res.json(portfolioItems[index]);
});

// Delete portfolio item (admin)
app.delete('/api/portfolio/:id', (req, res) => {
  const { id } = req.params;
  portfolioItems = portfolioItems.filter(item => item.id !== id);
  res.json({ message: 'Deleted successfully.' });
});

// ─── Health Check ───
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
