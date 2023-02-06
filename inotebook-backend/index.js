const connectToMongo = require('./db.js');
const express = require('express')
var cors = require('cors')


connectToMongo();

const app = express()
app.use(cors());
const port = 4000;


// Avaiable routes
app.use(express.json());// to user res.json()

app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('INOTEBOOK');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})