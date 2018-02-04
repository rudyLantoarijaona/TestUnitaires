const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

/*MongoClient.connect('mongodb://<user>:<useresgi2017>@ds125288.mlab.com:25288/test-unitaires', (err, database) => {
  if (err) return console.log(err)
  db = client.db('test-unitaires') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})*/

app.use(bodyParser.urlencoded({extended: true}))

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.listen(3000, function() {
  	app.get('/', (req, res) => {
 			res.sendFile(__dirname + '/index.html')
		})
  	app.post('/quotes', (req, res) => {
  /*db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  				})*/
  				console.log(req.body)
		})
})