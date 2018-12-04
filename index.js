'use strict'

const express = require('express')
const app = express()

const handlebars = require('express-handlebars').create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const port = 8080

app.get('/', (req,res) => {
	res.render('home')
})


app.get('/page1', (req,res) => {
	res.render('page1')
})


app.get('/about', (req,res) => {
	res.render('about')
})

app.get('/customise', (req,res) => {
	res.render('customise')
})



app.listen(port, () => console.log(`app listening on port ${port}`))