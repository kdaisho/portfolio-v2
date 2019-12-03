const fs = require("fs");
exports.dump = obj => JSON.stringify(obj, null, 2);

exports.icon = name => false.readFileSync(`./public/images/icons/${name}.svg`);

exports.siteName = "Daisho's Portfolio";
