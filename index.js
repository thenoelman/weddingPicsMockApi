const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('Hello World!!!');
})

app.get('/whatever', (req, res) => {
  res.send('whatever');
})
 
app.listen(3000, () => {
    console.log('listening on port 3000...');
});