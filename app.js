const express =require('express')
const app = express()
const port =8000;

app.get('/', (req, res)=>{
    res.send('well to expressjs nodejs')
    var a=1;
    var b=2;
    var c=a+b;
})

app.listen(port, ()=>{
    console.log(`project listening on port:  http://localhost:${port}`)
})