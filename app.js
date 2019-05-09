const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser')

var multer  =   require('multer');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes/controllers
app.use('/api', require('./routes/index'))

var storage =   multer.diskStorage({
    // file upload destination
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now());
    }
  });

var upload = multer({ storage : storage}).single('avatar');

app.post('/api/upload', (req, res) => {
    upload(req,res,function(err) {
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
          if(err) {
              console.log(err)
              return res.end("Error uploading file.");
          }
          res.end("File is uploaded");
      });
})
// catch all
app.use((req, res) => {
    res.status(404).send({
        url: `${req.originalUrl} not found`
    })
})



app.listen(port)

console.log(`RESTful API listening to: ${port}`)

module.exports = app