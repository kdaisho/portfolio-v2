const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const routes = require("./routes");
const helpers = require("./helpers");

const app = express();
// app.use(favicon(path.join(__dirname, "public", "favicon.icon")));

const ehbs = expressHandlebars.create({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
        getIcon: name => helpers.icon(name)
    }
});

app.engine(".hbs", ehbs.engine);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.use(
    express.static(path.join(__dirname, "public"), {
        etag: true,
        lastModified: false,
        setHeaders: (res, path) => {
            if (path.endsWith(".html")) {
                res.setHeader("Cache-Control", "no-cache");
            } else {
                res.setHeader("Cache-Control", "max-age=31536000");
            }
        }
    })
);

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use("/", routes);

module.exports = app;
