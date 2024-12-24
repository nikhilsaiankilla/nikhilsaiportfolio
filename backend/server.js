const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoute');
const skillsRoutes = require('./routes/skillRoute');
const projectsRoutes = require('./routes/projectRoute');
const contactRoutes = require('./routes/contactRoute');
const authRoutes = require('./routes/authRoute')

const colors = require('colors');

const { Project, Skills } = require('./db/associations')
const sequelize = require('./db/db')

const app = express();
const port = 8000;
require('dotenv').config()

// Synchronize models with the database
sequelize
    .sync({ alter: true }) // Use `alter: true` to adjust schema
    .then(() => {
        console.log('Database synced'.magenta);
    })
    .catch((err) => {
        console.log('Error syncing database:', err.red);
    });

app.use(cors());
app.use(bodyParser.json());

// API routesw
app.use('/api/v1/auth', authRoutes);

app.use('/api/v1', adminRoutes);

app.use('/api/v1', skillsRoutes);

app.use('/api/v1', projectsRoutes);

app.use('/api/v1', contactRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`.bgYellow.blue);
});
