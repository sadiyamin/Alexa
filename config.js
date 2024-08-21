const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "P6QUBIpS#IGmzhS2DYxXBICbuDVKmtYGDQWjAHUk2pp3gDOyibxk",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
};
