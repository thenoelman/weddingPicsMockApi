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

//#region Event Wall Photos
//http://localhost:3333/eventwallphotos/1
app.get('/eventwallphotos/:eventid', (req, res) => {
  
  if(req.params.eventid == "1")
  {
    let rawdata = fs.readFileSync('./response-files/eventWallphotos.json');
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

//#region Profile Info

//http://localhost:3333/profile/<:person_id>
//http://localhost:3333/profile/1
app.get('/profile/:person_id', (req, res) => {
  
  if(req.params.person_id == "1")
  {
    let rawdata = fs.readFileSync('./response-files/profileInfo_person_id_1.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.person_id == "2")
  {
    let rawdata = fs.readFileSync('./response-files/profileInfo_person_id_2.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.person_id == "3")
  {
    let rawdata = fs.readFileSync('./response-files/profileInfo_person_id_3.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.person_id == "4")
  {
    let rawdata = fs.readFileSync('./response-files/profileInfo_person_id_4.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.person_id == "5")
  {
    let rawdata = fs.readFileSync('./response-files/profileInfo_person_id_5.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else
  {
    res.send({"ERROR":"Invalid Photo Id."});
  }

});

//#endregion

//#region Get Photo Details for Photo Component

//http://localhost:3333/getPhotoDetails/<:photoid>
//http://localhost:3333/getPhotoDetails/1
app.get('/getPhotoDetails/:photoid', (req, res) => {
  
  if(req.params.photoid == "1")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo1.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "2")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo2.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "3")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo3.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "4")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo4.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "5")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo5.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "6")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo6.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "7")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo7.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "8")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo8.json');
    let jsonData = JSON.parse(rawdata);
    res.send(jsonData);
  }
  else if(req.params.photoid == "9")
  {
    let rawdata = fs.readFileSync('./response-files/photoDetails_photo9.json');
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