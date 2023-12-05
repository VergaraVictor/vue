
const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p> Desde app.js </p> 
    // `

    data() {
        return{
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    }
})

app.mount('#myApp')