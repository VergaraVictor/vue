import { getHeroeById } from './08-impo-exp'


// console.log('Inicio')
// new Promise( (resolve, reject) => {
//     console.log('cuerpo de la promesa')
//     resolve('Promesa resuelta')
// })
// .then( console.log )
// .catch( console.log )
// console.log('Fin')


const getHeroeByIdAsync = (id) => {
    return new Promise( ( resolve, reject )=> {

        setTimeout(() => {
            
            const hero = getHeroeById( id )
            
            if ( hero ) {
                resolve( hero )
            } else {
                reject('Heroe no existe')
            }
            
            resolve( hero )
        }, 1000);
    });
}




getHeroeByIdAsync(3)
    .then( h => console.log(`El heroe es: ${ h.name }`) )
    .catch( console.log )
