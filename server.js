//neutralspace.club
const express = require('express')
const path = require('path');
const app = express()
const port = 3000

//app.use(express.static(__dirname))
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/*
 * I want the text wrap to be max 130 characters on big screens.
 * and then to wrap some distance from the margins on smaller screens. So I can just size a div and write the text to the end maybe...
 * some gentle transition animations...if there's anytime to use them :)
 */
