console.log('Client side javascript file is loaded!') //Questo messaggio dall opzione sviluppatori nel browser sarà visibile sulla console browser

/*********************************************************************************** */
/* Il codice qui è Javascript e non Node.JS! Questo è il client side Javascript code!*/
/*********************************************************************************** */

//ESEMPIO STANDARD
/*fetch('http://puzzle.mead.io/puzzle').then((response) => { //url da cui vuoi prendere i dati --> fetch APi, prendi i dati dal fetch e THEN rispondi
    response.json().then((data) => {
        console.log(data) //sullo strumento sviluppatori in Chrome
    })
}) */ 

fetch('http://localhost:3000/weather?address=torino').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.forecast)
            console.log(data.location)
        }
    })
})