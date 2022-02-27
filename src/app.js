const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()

// defining paths
const partialsPath = path.join(__dirname,'../templates/partials')
app.use(express.static(path.join(__dirname,'../public')))

// hbs settings
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(partialsPath)


// routes
app.use(require('../routes/'))

app.listen(3000,()=>{
    console.log('server in port 3000')
})