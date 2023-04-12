const config = require('../config');

module.exports = {

    function(message, type) {

        if (type === "error") {
            console.log(`[ERROR] ${message}`);
        } else if (type === "warn") {
            console.log(`[WARN] ${message}`);
        } else if (type === "info") {
            console.log(`[INFO] ${message}`);
        } else if (type === "debug") {
            console.log(`[DEBUG] ${message}`);
        } else if (type === "")


        console.log(message);
    }


}