const express = require('express')
const app = express()
const mongoose=require('mongoose');
const port = 5000
const cors = require("cors");


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json());

app.use('/api/book',require('./routes/book'));


const MangoURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

mongoose.connect(MangoURI,{
  useUnifiedTopology: true
}).then(()=>{
  console.log("DB CONNECTED ! ")
}).catch(
  console.log("DB GOT OOOPSS!!!!")
)

