const express = require('express');
const app = express();

require('./routes')(app)

app.listen(5000, () => {
    console.log(`the serveris listening on port 5000`);
})