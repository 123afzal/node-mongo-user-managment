/**
 * Created by Syed Afzal
 */
const mongoose = require("mongoose");
const {log} = require('../utils/logger');

exports.connect = (app) => {
    const options = {
        useNewUrlParser: true,
        autoIndex: false, // Don't build indexes
        reconnectTries: 30, // Retry up to 30 times
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0,
    };

    const connectWithRetry = () => {
        mongoose.Promise = global.Promise;
        console.log("MongoDB connection with retry");
        mongoose
            .connect(process.env.MONGODB_URI, options)
            .then(() => {
                log.info("MongoDB is connected");
                app.emit("ready");
            })
            .catch((err) => {
                log.info("MongoDB connection unsuccessful, retry after 2 seconds.");
                setTimeout(connectWithRetry, 2000);
            });
    };
    connectWithRetry();
};
