//Day js to formulate date and time 
const dayjs = require('dayjs');

const dateFormat = function(timestamp) {
    return dayjs(timestamp).format('DD/MM/YYYY hh:mm:ss a');
}
module.exports = dateFormat;