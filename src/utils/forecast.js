const request = require('request');

const forecast = (longitude,latitude,callback)=>{
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
        description: body.current.weather_descriptions[0],
        time: body.current.observation_time
      })
    }
  })
}


module.exports ={
  forecast:forecast
}