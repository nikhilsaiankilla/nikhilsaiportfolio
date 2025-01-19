require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');

const sequelize = require('./db/db');
const adminRoutes = require('./routes/adminRoute');
const skillsRoutes = require('./routes/skillRoute');
const projectsRoutes = require('./routes/projectRoute');
const contactRoutes = require('./routes/contactRoute');
const authRoutes = require('./routes/authRoute');

const { defineAssociations } = require('./db/associations');
const { trackUsersMiddleware } = require('./middleware/trackUsersMiddleware');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(trackUsersMiddleware);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully'.green);
        defineAssociations();
        await sequelize.sync({ alter: false });
        console.log('Database synced'.magenta);
    } catch (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
})();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', adminRoutes);
app.use('/api/v1', skillsRoutes);
app.use('/api/v1', projectsRoutes);
app.use('/api/v1', contactRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`.blue);
});
