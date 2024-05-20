
import authApi from "@/api/authApi"

// export const myAction = async ({ commit }) => {

// }


export const createUser = async ({ commit }, user) => {

    const { name, email, password} = user


    try {

        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        console.log(data) 
        const { idToken, refreshToken } = data
        
        await authApi.post(':update', { displayName: name, idToken })
        
        // TODO: Mutation: loginUser

        return { ok: true }
        
    } catch (error) {
        return {ok: false, message: error.response.data.error.message }
    }

}
