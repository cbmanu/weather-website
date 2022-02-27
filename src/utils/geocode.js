const request = require('request')

const geocode = (adress,callback)=>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(adress) +'.json?access_token=pk.eyJ1IjoiY2JtYW51IiwiYSI6ImNrenN5bmZheTc3bWkydm16Mnd6NWV2bXgifQ._XuM0rU5QooK1Qaoacv1xw&limit=1'
        request({ url, json:true},(error,{ body } = response)=>{
            if(error){
                callback('Unable to connect to weather services:(')
            }else if(body.features.length === 0){
                callback('Unable to find that location:(')
            }else{
                callback(undefined,{
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }
        })
}

module.exports = {
    geocode: geocode
}