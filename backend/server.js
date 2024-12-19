const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoute');
const skillsRoutes = require('./routes/skillRoute');
const projectsRoutes = require('./routes/projectRoute');
const contactRoutes = require('./routes/contactRoute');
const authRoutes = require('./routes/authRoute')

const colors = require('colors');

const app = express();
const port = 8000;
require('dotenv').config()

app.use(cors());
app.use(bodyParser.json());

// API routesw
app.use('/api/v1/auth', authRoutes);

app.use('/api/v1', adminRoutes);

app.use('/api/v1', skillsRoutes);

app.use('/api/v1', projectsRoutes);

app.use('/api/v1', contactRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}` .bgYellow.blue);
});
