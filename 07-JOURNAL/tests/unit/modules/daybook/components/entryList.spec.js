import {shallowMount} from '@vue/test-utils'
import { createStore } from 'vuex'

import { getEntriesByTerm } from '../../../../../src/modules/daybook/store/journal/getters'
import { journalState } from '../../../mock-data/test-journal-state'
import EntryList from '../../../../../src/modules/daybook/components/EntryList.vue'

describe('Pruebas en el EntryList', () => {

    const journalMockModule = {
        namespaced: true,
        getters: {
            // getEntriesByTerm: jest.fn()
            getEntriesByTerm
        },
        state: () => ({
            isLoading: false,
            entries: journalState.entries
        })
    }

   
   
    const store = createStore({
        modules:{
            journal: { ...journalMockModule }
        }
    })

    const wrapper = shallowMount( EntryList, {
        global: {
            mocks: {
                // TODO: $router:
            },
            plugins: [ store ]
        }
    })


    test('debe de llamar el getEntriesByTerm sin termino y mostrar 2 entradas', () => {

        console.log( wrapper.html() )
    })


})