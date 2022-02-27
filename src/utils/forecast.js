const request = require('request');

const forecast =(longitude,latitude,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=7e1d6b68629b447e6a89039f8c19b8fa&query='+longitude+','+latitude+'&units=m'
  request({ url, json:true},(error,{ body } = response)=>{
    if(error){
      callback('Unable to conecct to weather services')
    }else if(body.error){
      callback('Unable to find that cordinate!')
    }else{
      callback(undefined,{
        temperature: body.current.temperature,
        feelsLike: body.current.feelslike,
        description: body.current.weather_descriptions[0]
      })
    }
  })
}


module.exports ={
  forecast:forecast
}

 
  //
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)