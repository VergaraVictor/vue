

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
}

//Destruccturación
const {name, age, codeName, power= 'No tiene poder' } = person

// console.log( name )
// console.log( age )
// console.log( codeName )
// console.log( power )

const createHero = ({name, age, codeName, power= 'No tiene poder' }) => ({
        id: 1123416523,
        name,
        age,
        codeName,
        power,
    })

console.log( createHero( person ) )