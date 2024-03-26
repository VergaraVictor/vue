import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    // TODO: falta algo
    namespaced: true,
    state,
    // Son metodos que estas sirven para realizar cambios en el state
    mutations,
    // LAs acciones son metodos que pueden ser asincronas; que normalmente se usan para la compararión referente aun backend
    actions,
    getters,
}


export default counterStore