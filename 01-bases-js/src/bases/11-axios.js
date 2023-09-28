import axios from 'axios'


const apikey = 'MmRPzjlAW45Eh8XtN6OLkCEd7xpLbVdf'
// `https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`


const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey
    }
})

export default giphyApi


// con esto funciona en el index fernando pidio que la comentara  por el siguiente video
// giphyApi.get('/random')
//     .then( resp => {

//         const { data } = resp.data
//         const { url } = data.images.original


//         const img = document.createElement('img')
//         img.src = url

//         document.body.append( img )
//     })