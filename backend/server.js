const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();  // This loads variables from .env file

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Placeholder route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const productRoutes = require('./routes/productRoutes');

// Use the product routes
app.use('/api/products', productRoutes);
