const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser')

var multer  =   require('multer');
var request = require('request')
var fs = require('fs')

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

  app.use('/error', (req, res) => {
    throw Error('New Error....') // should be catched in Line 66
  });

  /**
   * Upload example
   */
const upload = multer({ storage : storage}).single('avatar');
app.post('/api/upload', (req, res) => {
    let fileName = ''
    upload(req,res,function(err) {
        console.log('Filename => ', req.file.originalname)
          if(err) {
              console.log(err)
              return res.end("Error uploading file.");
          }

          fileName = req.file.filename
          const form_data = {'modelId' : '756de8ac-9f09-4fba-87b0-4f30e7e8f12f', 'category': 'Cat', 'file': fs.createReadStream(`./uploads/${fileName}`)}
          const options = {
              url : 'https://app.nanonets.com/api/v2/ImageCategorization/UploadFile/',
              formData: form_data,
              headers: {
                  'Authorization' : 'Basic ' + Buffer.from('jZ-Q-_WvB33TP-tYCRTMq0G31YpV9On_' + ':').toString('base64')
              }
          }
          request.post(options, function(err, httpResponse, body) {
              console.log('DONE uploading', body)
          });
          res.end("File is uploaded");
      });
})

// catch all
app.use((req, res) => {
    res.status(404).send({
        url: `${req.originalUrl} not found`
    })
})

app.use((error, req, res, next) => {
    console.log('Yes we are here....')
    console.log('ERROR', error);
    res.status(500).send({error: 'Something went wrong.'})
})

app.listen(port)
console.log(`RESTful API listening to: ${port}`)
module.exports = app