const express = require('express');
const cors = require('cors');
const connectDB = require('../back-end/config_db');
const authRoutes = require('../back-end/routes_auth');
const taskRoutes = require('../back-end/routes_tasks');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));