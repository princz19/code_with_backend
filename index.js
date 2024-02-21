
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
  res.send('Server started...!')
})

app.get('/instegram',(req,res)=>{
     res.send("@beingsprince")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})