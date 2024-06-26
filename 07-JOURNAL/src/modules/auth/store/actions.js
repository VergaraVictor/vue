
import authApi from "@/api/authApi"

// export const myAction = async ({ commit }) => {

// }


export const createUser = async ({ commit }, user) => {

    const { name, email, password} = user


    try {

        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        // console.log(data) 
        const { idToken, refreshToken } = data
        
        await authApi.post(':update', { displayName: name, idToken, refreshToken })
        
        // TODO: Mutation: loginUser
        delete user.password // este se elimina por que la contraseña para no almacenarla en el storage
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }
        
    } catch (error) {
        return {ok: false, message: error.response.data.error.message }
    }

}

export const signInUser = async ({ commit }, user) => {

    const { email, password} = user


    try {

        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
        const { displayName, idToken, refreshToken } = data
        // console.log(data)
        user.name = displayName

        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }
        
    } catch (error) {
        return {ok: false, message: error.response.data.error.message }
    }

}

export const checkAuthentication = async ({ commit }) => {

    const idToken      = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('idToken')

    if( !idToken ) {
        commit('logout')
        return { ok: false, message: 'No hay token'}
    }

    try {
        const { data } = await authApi.post(':lookup', { idToken })
        // console.log(data)
        const { displayName, email } = data.users[0]
        
        const user = {
            name: displayName,
            email
        }

        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true}

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.error.message }
    }
}