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

const weatherForm = document.querySelector('form') //seleziono il tag form nella pagina html
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => { //attendi l'evento submit sulla variabile weatherForm e poi esegui la callback
    e.preventDefault() //non fa refreshare la pagina per creare confusione al client

    fetch('http://localhost:3000/weather?address='+search.value).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.forecast)
            console.log(data.location)
        }
    })
})

    //console.log('testing') per debug
    
})