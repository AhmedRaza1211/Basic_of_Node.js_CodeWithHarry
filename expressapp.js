const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Here I am learning Express');
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})