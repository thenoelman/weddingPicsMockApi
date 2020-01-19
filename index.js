const express = require('express');
const app = express();
const fs = require('fs');

//#region  View All Photos

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

//#endregion

//#region Event Wall

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

//#endregion

//#region Photo Comments

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
  else if(req.params.photoid == "4")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo4.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "5")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo5.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "6")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo6.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "7")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo7.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "8")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo8.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "9")
  {
    let rawdata = fs.readFileSync('./response-files/photoComments_photo9.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else
  {
    res.send({"ERROR":"Invalid Photo Id."});
  }

});

//#endregion
 
//#region Photo Hearts

//http://localhost:3333/getPhotoHearts/<:photoid>
//http://localhost:3333/getPhotoHearts/1
app.get('/getPhotoHearts/:photoid', (req, res) => {
  
  if(req.params.photoid == "1")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo1.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "2")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo2.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "3")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo3.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "4")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo4.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "5")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo5.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "6")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo6.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "7")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo7.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "8")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo8.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "9")
  {
    let rawdata = fs.readFileSync('./response-files/photoHearts_photo9.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else
  {
    res.send({"ERROR":"Invalid Photo Id."});
  }

});

//#endregion

//ASSIGN PORT
const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});