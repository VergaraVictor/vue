
// import { owners } from './data/heroes'

// const [dc, marvel] = owners

// console.log( dc )
// console.log( marvel )

 import superHeroes from '../data/heroes'

//  console.log(superHeroes)

 //getHeroById (id)
 // funciones de flecha
 //find
//  const getHeroById = ( id ) => {
//     return superHeroes.find( hero => hero.id === id )
//  }
export const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id )



 // getHeroesByOwner ('DC', 'MARVEL' )

export const getHeroesByOwner = ( owner ) => superHeroes.filter( hero => hero.owner === owner )


//Esto se coloca en el index para que se ejecute con solo los console logs
// import { getHeroById, getHeroesByOwner } from "./bases/08-impo-exp"
 
 

// console.log( getHeroById(2))


// console.log( getHeroesByOwner('Marvel'))
