const express = require('express');
const app = express();
const fs = require('fs');

//http://localhost:3333/viewallphotos/<:eventid>
//http://localhost:3333/viewallphotos/1
app.get('/viewallphotos/:eventid', (req, res) => {
  
  if(req.params.eventid == "1")
  {
    let rawdata = fs.readFileSync('./response-files/eventPhotos.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else
  {
    res.send({"ERROR":"Invalid Event Id."});
  }

});

//http://localhost:3333/eventwall/<:eventid>
//http://localhost:3333/eventwall/1
app.get('/eventwall/:eventid', (req, res) => {
  
  if(req.params.eventid == "1")
  {
    let rawdata = fs.readFileSync('./response-files/eventWall.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else
  {
    res.send({"ERROR":"Invalid Event Id."});
  }

});

//http://localhost:3333/getPhotoComments/<:photoid>
//http://localhost:3333/getPhotoComments/1
app.get('/getPhotoComments/:photoid', (req, res) => {
  
  if(req.params.photoid == "1")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo1.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "2")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo2.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "3")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo3.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else
  {
    res.send({"ERROR":"Invalid Photo Id."});
  }

});
 
//ASSIGN PORT
const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});