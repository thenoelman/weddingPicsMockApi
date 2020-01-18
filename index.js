const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello World!!!');
})

app.get('/whatever', (req, res) => {
  res.send([1,2,3,]);
})

app.get('/whatever/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/test', (req, res) => {
  var fs = require('fs');
  fs.readFile( __dirname + '/response-files/test.json', function (err, data) {
    if (err) {
      throw err; 
    }
    console.log(data.toString());
    res.send(data);
  });
  
});

app.get('/test2', (req, res) => {
  res.send([1,2,3,]);
  
});

app.get('/test3', (req, res) => {
  testSTring = `[
    {
      "id": 1,
      "title": "Nope",
      "isDirty": true
    },
  {
      "id": 2,
      "title": "Yes",
      "isDirty": false
    }
  ]`;
  res.send(testSTring);
})

app.get('/test4', (req, res) => {
  res.send([{"one": 1}]);
})

app.get('/test5', (req, res) => {
  res.send([{"one": 1}, {"two": 2}]);
})

app.get('/test6', (req, res) => {
  res.send({"thing": 88});
})

app.get('/test7', (req, res) => {
  res.send({"thing": 88, "foo": 11, "bar": 3});
})
 
//ASSIGN PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});