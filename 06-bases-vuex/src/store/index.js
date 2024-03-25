import { createStore } from "vuex"

export default createStore({

    state: {
        count: 1,
        lastMutation: 'none'
    },
    // Son metodos que estas sirven para realizar cambios en el state
    mutations: {
        increment( state ) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, val ) {
            state.count += val
            state.lastMutation = 'incrementBy'
        }
    }
    
})