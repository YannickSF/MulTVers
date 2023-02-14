const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/', router);
app.listen(port, () => {
    console.log(`MulTVers : listening port ${port}`)
})