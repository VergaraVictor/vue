// Acciones son asincronas que pueden llamar una mutación
// export const myAction = async ({ commit }) => {

import journalApi from "@/api/journalApi"

// }

export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get('/entries.json')
    const entries = []
    for(let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => { // entry debe ser un paramentro

    // Extraer solo lo que necesitan // -id

    const { date, picture, text } = entry
    const dataToSave = { date, picture, text } // es el body que sale en postman

    // await journalApi.put( PATH .json, dataToSave)

    const resp = await journalApi.put( `/entries/${ entry.id }.json`, dataToSave)

    console.log(resp);

    // Commit de una mutation -> updateEntry

    commit('updateEntry', { ...entry })


}


export const createEntry = async ( {commit}, entry) => {

    // dataToSave
    const { date, picture, text} = entry
    const dataToSave = { date, picture, text }

    // const { data } = await journalApi.post( `PATH.json`, dataToSave)
    const { data } = await journalApi.post( `entries.json`, dataToSave )
    
    // data = { "name": "-NugD_JjQgWnCHDk7Ixc" }
    dataToSave.id = data.name
    // commit -> addEntry
    commit('addEntry', dataToSave )

    return data.name
}