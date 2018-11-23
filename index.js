const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hellow World!');
    res.end();
})

app.get('/api/courses', (req, res)=>{
    res.write(JSON.stringify([1, 2, 3]));

})

const port = process.env.PORT || 1234;
app.listen(port, ()=>console.log(`Listening on port ${port}...`));