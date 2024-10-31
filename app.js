const express = require('express')
const app = express()

app.listen(4000, ()=>{
    console.log('Running on port 4000')

})

app.get('/api/v1', (req, res)=>{
    res.send('<h1>Welcome to Render test</h1>')
})