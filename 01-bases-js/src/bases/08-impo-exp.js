
// import { owners } from './data/heroes'

// const [dc, marvel] = owners

// console.log( dc )
// console.log( marvel )

 import superHeroes from './data/heroes'

//  console.log(superHeroes)

 //getHeroById (id)
 // funciones de flecha
 //find
//  const getHeroById = ( id ) => {
//     return superHeroes.find( hero => hero.id === id )
//  }
const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id )



 // getHeroesByOwner ('DC', 'MARVEL' )

 const getHeroesByOwner = ( owner ) => superHeroes.filter( hero => hero.owner === owner )

