
import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vue-demos-9ccc5-default-rtdb.firebaseio.com/'
})

journalApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    // config.headers = {
    //     authorization: 'bearer idToken'
    // } Esto es comuin verlo pero depende del Backend que se utilice

    return config
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default journalApi


