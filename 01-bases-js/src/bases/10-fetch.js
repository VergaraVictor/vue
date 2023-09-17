

const apikey = 'MmRPzjlAW45Eh8XtN6OLkCEd7xpLbVdf'
// https://api.giphy.com/v1/gifs/random?api_key=MmRPzjlAW45Eh8XtN6OLkCEd7xpLbVdf


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
    .then( resp => resp.json() )
    .then (({ data }) => {
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )

        
    })