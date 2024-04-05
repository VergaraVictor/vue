// Mutaciones son sincronas y hacen las moidificacion del state y van afectar todaos los llamados del state
// export const myMutation = ( state ) => {

// }

export const setEntries = ( state, entries ) => {

    state.entries = [...state.entries, ...entries] // esto es un nuevo arreglo con los entries anteriores y los nuevos
    state.isLoading = false
}

export const upateEntries = ( state, entry ) => { // entry actualizada

    //state.entries => un arreglo ...

    const idx = state.entries.map( e => e.id ).indexOf( entry.id ) // ['ABC','XYZ'] Esto es lo que hace
    console.log({idx});

    // state.entries = ... entry

    state.entries[idx] = entry 
}

export const addEntry = (state, entry ) => {
    //state -> entries -> la nueva entrada debe ser la primera
    state.entries = [ entry, ...state.entries ]
}