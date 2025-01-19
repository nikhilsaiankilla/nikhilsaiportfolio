const { UserActivity } = require('./../model/userActivityModel')

const trackUsersMiddleware = async (req, res, next) => {
    const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const requestData = {
        ip: userIP,
        method: req.method,
        endpoint: req.originalUrl,
        timestamp: new Date().toISOString(),
    };
    console.log(`User Activity:`, requestData);

    try {
        await UserActivity.create(requestData);
    } catch (e) {
        console.log(e);
    }

    next();
};

module.exports = { trackUsersMiddleware }