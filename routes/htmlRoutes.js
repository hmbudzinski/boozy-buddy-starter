// We use the path package to target the correct path to find the HTML docs in our file system
const path = require("path"); //allows you to join togethe abosolute paths

module.exports = function (app) {
    // get of /beers => beers.html
    app.get("/beers", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/beers.html")) //__dirname gives you the absolute path to where you are going 
    });

    // get of /cocktails => cocktails.html
    app.get("/cocktails", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/cocktails.html")) 
    });

    // get of /wines => wines.html
    app.get("/wines", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/wines.html")) 
    });

    // get of /drinks/loves => loves.html
    app.get("/drinks/loves", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/loves.html")) 
    });

    // get of /drinks/hates => hates.html
    app.get("/drinks/hates", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/hates.html")) 
    });
    
}
