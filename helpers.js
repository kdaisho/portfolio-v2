const fs = require("fs");
exports.dump = obj => JSON.stringify(obj, null, 2);

exports.icon = name => fs.readFileSync(`./public/images/${name}.svg`);
