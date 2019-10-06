const greeter = (name = 'user',age) => { //mettendo name= 'user' vai a dare il parametro di default se non viene passato un parametro name
    console.log('Hello '+name)
}

greeter('Christian')

greeter()

