import { createStore } from 'vuex'
import journal from '../../../../../../src/modules/daybook/store/journal';
import state from '../../../../../../src/modules/daybook/store/journal/state';



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

    // Basicas
    Test('este es el estado inicial, debe de tener este state', () => {

    })


})