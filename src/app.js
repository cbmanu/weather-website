const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

// defining paths
const partialsPath = path.join(__dirname,'../templates/partials')
app.use(express.static(path.join(__dirname,'../public')))

// hbs settings
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(partialsPath)


// routes
app.use(require('../routes/'))

// listening

app.listen(port,()=>{
    console.log('server in port '+ port)
})