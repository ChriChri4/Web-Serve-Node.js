const express = require('express')
const path = require('path') //modulo core di Node per i path


//console.log(__dirname) //stampa nome directory dove si trova questo file
//console.log(__filename) //stampa tutto il percorso con il nome di questo file
console.log(path.join(__dirname)) //comportamento uguale a sopra
console.log(path.join(__dirname,'../..')) //per ogni coppia di .. torna indietro di una cartella
console.log(path.join(__dirname,'../public')) //stampa dov'è publix

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

/*app.get('',(req, res) => { //cosa restituisce
    //res.send('Hello Express!')
    res.send('<h1>Weather<h1>') //Restituisco HTML
})*/ //Non serve, sopra applica già una pagina per quella principale

/*app.get('/help',(req,res) => {
    res.send({ //Restituisco JSON
        name: 'Christian',
        age: 24
    })
})*/

/*app.get('/about', (req,res) => {
    res.send('<h1>About Page<h1>')
})*/

app.get('/weather',(req,res) => {
    res.send([
        {
            location: 'Torino',
            forecast: '50C°'
        },
        {
            location: 'Seattle',
            forecast: '14C°'
        }
    ])
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => { //Inizializzi il server in ascolto, dando la porta dove rimani in ascolto e 3000 è per lo sviluppo locale
    console.log('Server is up on the port 3000')
}) 