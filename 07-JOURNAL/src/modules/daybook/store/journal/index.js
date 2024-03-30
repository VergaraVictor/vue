// Se va importar todo
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'


// Se realiza la importación del mismo

const journalModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default journalModule

