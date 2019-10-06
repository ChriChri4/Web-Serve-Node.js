const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiY2hyaXMzNiIsImEiOiJjazFiM3BmNzcyYm4wM2NuaTZkcG40cDl0In0.XTHKJE05WYuKvwkvR4s-0A'
//la funzione encodeURIComponent serve perchè se inserisci caratteri speciali vengono codificati correttamente
    request({url:url,json:true}, (error,response) => {
    if(error)
    {
        callback('Unable to connect to geocoding service',undefined) //puoi anche lasciar vuoto per non inserire il secondo parametro undefined
    } else if (response.body.features.length === 0)
    {
        callback('Unable to find the location',undefined)
    } else {
    //OLD callback(undefined,{'Le coordinate di '+ response.body.features[0].place_name +' sono '+ response.body.features[0].geometry.coordinates[0] + ' longitudine e '+ response.body.features[0].geometry.coordinates[1] +' latitudine')
        callback(undefined,{
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location: response.body.features[0].place_name
        })
    }
})
}

module.exports = geocode