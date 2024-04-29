import { createStore } from 'vuex'
import journal from '../../../../../../src/modules/daybook/store/journal';
import state from '../../../../../../src/modules/daybook/store/journal/state';
import { journalState } from '../../../../mock-data/test-journal-state';



const createVuexStore = ( initialState ) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })



describe('Vuex - Pruebas en el Journal module', () => {

    // Basicas==========================================================
    test('este es el estado inicial, debe de tener este state', () => {

        const store = createVuexStore( journalState )
        const {isLoading, entries } = store.state.journal

        expect(isLoading ).toBeFalsy()
        expect( entries ).toEqual( journalState.entries )
    })

    // Mutations========================================================
    test('mutation: setEntries', () => {

        const store = createVuexStore({ isLoading: true, entries: [] })

        store.commit('journal/setEntries', journalState.entries )
        expect( store.state.journal.entries.length ).toBe(2)

        store.commit('journal/setEntries', journalState.entries )
        expect( store.state.journal.entries.length ).toBe(4)
        
        expect( store.state.journal.isLoading ).toBeFalsy()

    })

    test('mutation: updateEntry', () => {
        // ceate store con entries
        const store = createVuexStore( journalState ) 

        //updatedEntry
        const updatedEntry = {
            id: '-Nve7NS13QoHd-mkDF-J',
            date : 1713325047656,
            text : 'Hola mundo desde pruebas'
        }
        // commit de la mutacion
        store.commit('journal/updateEntry', updatedEntry )

        const storeEntries = store.state.journal.entries
        //expects
        // Entries.lenght = 2
        expect( storeEntries.length ).toBe(2)
        // entries tiene que existir updateEntry toEqual
        expect(
            storeEntries.find( e => e.id === updatedEntry.id )
        ).toEqual( updatedEntry )

    })

    test('mutation: addEntry deleteEntry', () => {
        
        // Crear Store
        const store = createVuexStore( journalState )
        //addEntry { id: 'ABC-123', text: 'Hola Mundo' }
        store.commit('journal/addEntry', {id: 'ABC-123', text: 'Hola Mundo' })
        const stateEntries = store.state.journal.entries
        //Expects
        //entradas sean 3
        expect( stateEntries.length ).toBe(3)
        // entrada con el id ABC-123 exista
        expect( stateEntries.find( e => e.id === 'ABC-123' ) ).toBeTruthy()

        // deleteEntry, 'ABC-123'
        store.commit('journal/deleteEntry', 'ABC-123')        
        //Expects
        // entradas deben de ser 2
        expect( store.state.journal.entries.length ).toBe(2)
        // entradas con el id ABC-123 no debe de existir
        expect( store.state.journal.entries.find( e => e.id === 'ABC-123' ) ).toBeFalsy()
    })

    // Getters============================================================================
    test('getters: getEntriesByTerm getEntryById', () => {

        const store = createVuexStore( journalState )

        const [ entry1, entry2 ] = journalState.entries

        expect( store.getters['journal/getEntriesByTerm']('').length ).toBe(2)
        expect( store.getters['journal/getEntriesByTerm']('segunda').length ).toBe(1)

        expect( store.getters['journal/getEntriesByTerm']('segunda') ).toEqual([ entry2 ])
        //-Nve7NS13QoHd-mkDF-J
        expect( store.getters['journal/getEntryById']('-Nve7NS13QoHd-mkDF-J') ).toEqual( entry1 )
    })

})