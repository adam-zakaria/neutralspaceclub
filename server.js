//neutralspace.club
const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const port = 3000

//app.use(express.static(__dirname))
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/adam', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/posts', (req, res) => {
    fs.readdir("posts", function (err, files) {
        var fileArray = [];
        if (err) {
            console.log("ERROR!");
            process.exit(1);
          }
        files.forEach(function (file, index) {
            var postPath = path.join(__dirname, "posts", file);
            fs.readFile(postPath, (err, data) => {
                res.setHeader('content-type', 'text/html');
                res.send(data);
            });
        });
    });
});

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
