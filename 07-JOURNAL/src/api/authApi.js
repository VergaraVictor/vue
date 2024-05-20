
import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyCfbTHuTE9MgMQkCaWDMiTJlLyIJTA0dmo'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi


