var path = require("path");

module.exports = function (app) {
    app.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/home.html"))
    })

    app.get("/survey", (resquest, response) => {
        response.sendFile(path.join(__dirname, "../public/survey.html"))
    })
}