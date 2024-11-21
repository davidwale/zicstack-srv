const express = require('express');
const cors = require('cors');
const quoteRoutes = require('./routes/quoteRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', quoteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});