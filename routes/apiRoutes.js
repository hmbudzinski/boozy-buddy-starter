module.exports = function(app, connection) {

    // get of /api/wines => JSON of all wines, DESC by rating
    app.get("/api/wines", (req, res) => {
        connection.query("SELECT*FROM drinks WHERE ? ORDER BY rating DESC", {type: "wine"}, (err, data) => {
            if(err) {
                return res.status(500).end();
            }
            res.json(data);
        });
    });

    // get of /api/beers => JSON of all beers, DESC by rating
    app.get("/api/beers", (req, res) => {
        connection.query("SELECT*FROM drinks WHERE ? ORDER BY rating DESC", {type: "beer"}, (err, data) => {
            if(err) {
                return res.status(500).end();
            }
            res.json(data);
        });
    });

    // get of /api/cocktails => JSON of all cocktails, DESC by rating
    app.get("/api/cocktails", (req, res) => {
        connection.query("SELECT*FROM drinks WHERE ? ORDER BY rating DESC", {type: "cocktail"}, (err, data) => {
            if(err) {
                return res.status(500).end();
            }
            res.json(data);
        });
    });

    // get of /api/loves => JSON of all drinks where 'love=true', alphabetized

    app.get("/api/loves", (req, res) => {
        connection.query("SELECT*FROM drinks WHERE ? ORDER BY name", {love_it: true}, (err, data) => {
            if(err) {
                return res.status(500).end();
            }
            res.json(data);
        });
    });

    // get of /api/hates => JSON of all drinks where 'hate=true', alphabetized
    app.get("/api/hates", (req, res) => {
        connection.query("SELECT*FROM drinks WHERE ? ORDER BY name", {hate_it: true}, (err, data) => {
            if(err) {
                return res.status(500).end();
            }
            res.json(data);
        });
    });

    // post to /api/drinks => adds a new drink to table
    // (note: we'll be making changes to some of the key/val pairs passed in from req.body)

    app.post("/api/drinks", (req, res) => {

        const body = req.body;
        body.love_it = body.love_it === "true"; //boolean true or false is stored in the boolean
        body.hate_it = body.hate_it === "true"; 
        body.price = body.price || null;

        connection.query("INSERT INTO drinks SET ?", [body], (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).end();
            }

            res.end();            
        })
        //sends json to the front end, and terminates response cycle
    })

}
