const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apps = process.env.APP_NAME || 'KUBERNETES-1';

app.get('/', (req, res) => {
    res.send(`Hello World! Welcome to ${apps}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

