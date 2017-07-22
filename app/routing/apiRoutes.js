const friends = require('../data/friends.js')

module.exports = function(app) {
    app.get("/api/friends", (request, response) => {
        response.json(friends)
    })

    app.post("/api/friends", (request, response) => {
        let entry = request.body
        friends.push(entry)
        console.log(friends)
    })
}