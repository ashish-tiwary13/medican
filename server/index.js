const express = require('express');

const app = express();

app.use('/api', require('./routes/api'));

const Port = process.env.PORT || 5000;
    
app.listen(Port, () => {
    console.log(`Server is listening on port ${Port}`);
});

