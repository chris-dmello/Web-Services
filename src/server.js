const express = require('express');
const app = express();

app.listen(process.env.PORT, () => { console.log(`Listening on Port: ${process.env.PORT}`)});