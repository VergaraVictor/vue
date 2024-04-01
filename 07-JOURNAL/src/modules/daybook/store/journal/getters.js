// Getter es para traer información de nuestro state y se puede procesar
// export const myGetter = async ( state ) => {
// return state.algo // tomar lo que se necesite que retorne
// }

export const getEntriesByTerm = ( state ) => ( term = '' ) => {
    
    if ( term.length === 0 ) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLocaleLowerCase() ) )
}

// Recibir el id como argumento
export const getEntryById = ( state ) => ( id = '' ) => {

    const entry = state.entries.find( entry => entry.id === id )

    if ( !entry ) return

    return { ...entry } // TODO: Prueben todo
}