

console.log('Inicio')


new Promise( (resolve, reject) => {
    

    console.log('cuerpo de la promesa')
    resolve('Promesa resuelta')
})
.then( console.log )
.catch( console.log )


console.log('Fin')