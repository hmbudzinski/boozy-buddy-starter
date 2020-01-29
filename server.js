const express = require("express");
const mysql = require("mysql")
const app = express(); //storing return value of that function
const PORT = process.env.PORT || 3000; //do this every time, allows different ports from different severs/hosts like Heroku
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2500573hmb",
    database: "boozybuddy_db"
});

// Middleware
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //middleware, code that runs after the server gets the request and before we get the response. transforms the request object and respose object. allows you to not write html routes for each individual page. when a request is made for a file or location, the first place express will look is in the "public" folder, just path to /assets/js etc and it finds it. Still have to route the other html pages 


// Database Connection
// =============================================================
// CONNECT TO DATABASE
connection.connect(() => {
    console.log(`Conected to MySQL database as id ${connection.threadId}`)
});

// Routes
// =============================================================
// IMPORT ROUTES FILES

require("./routes/apiRoutes.js")(app, connection); //./ goes from file youre in then to the folder
require("./routes/htmlRoutes")(app);

// Server Listen
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
