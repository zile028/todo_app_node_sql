const dayjs = require("dayjs");

function formatDate(data) {
    return dayjs(data).format("DD.MM.YYYY.");
}

module.exports = {formatDate};