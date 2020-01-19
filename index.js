const express = require('express');
const app = express();
const fs = require('fs');
 
app.get('/', (req, res) => {
  res.send('Hello World!!!');
})

app.get('/whatever', (req, res) => {
  res.send([1,2,3,]);
})

app.get('/whatever/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/test5', (req, res) => {
  res.send([{"one": 1}, {"two": 2}]);
})

app.get('/test6', (req, res) => {
  res.send({"thing": 88});
})

app.get('/test7', (req, res) => {
  res.send({"thing": 88, "foo": 11, "bar": 3, "fooBar": {"number": 5, "object":{"key":"value"}}});
})

app.get('/test8', (req, res) => {
  let rawdata = fs.readFileSync('./response-files/test2.json');
  let whatever = JSON.parse(rawdata);
  res.send(whatever);
})
 
//ASSIGN PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});