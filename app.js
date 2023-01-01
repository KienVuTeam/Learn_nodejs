const express =require('express')
const morgan = require('morgan')
const app = express()
const port =8000;
// process.title = myApp;

app.use(morgan('combined'))

app.get('/', (req, res)=>{
    res.send('well to expressjs nodejs')
    var a=1;
    var b=2;
    var c=a+b;
})

app.listen(port, ()=>{
    console.log(`project listening on port:  http://localhost:${port}`)
})