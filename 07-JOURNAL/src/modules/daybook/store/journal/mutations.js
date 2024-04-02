// Mutaciones son sincronas y hacen las moidificacion del state y van afectar todaos los llamados del state
// export const myMutation = ( state ) => {

// }

export const setEntries = ( state, entries ) => {

    state.entries = [...state.entries, ...entries] // esto es un nuevo arreglo con los entries anteriores y los nuevos
    state.isLoading = false
}

export const upateEntries = (/* state */ ) => {

}

export const addEntries = (/* state */ ) => {

}