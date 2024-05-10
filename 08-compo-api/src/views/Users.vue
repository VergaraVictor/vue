<template>
    <h2>Espere por favor...</h2>
    <h2>Usuarios</h2>
    <h5>Error en la carga...</h5>

    <div>
        <ul>
            <li>
                <h4>Nombre de la persona</h4>
                <h6>email@gmail.com</h6>
            </li>
        </ul>
    </div>

    <button>Atras</button>
    <button>Siguiente</button>
    <span>Página: 5</span>

</template>

<script>
import {ref} from 'vue'
import axios from 'axios'


export default {
    
    setup() {

        const user          = ref([])
        const isLoading     = ref(true)
        const currentPage   = ref(1)
        const errorMesasage = ref(1)

        const getUsers = async( page = 1) => {
            
            if ( page <= 0 ) page = 1

            isLoading.value = true

            const { data } = await axios.get('https://reqres.in/api/users', {
               params: { page }                 
            })

            if( data.data.lenth > 0 ) {
                user.value = data.data
                currentPage.value = page
            } else if ( currentPage.value > 0 ){
                errorMesasage.value = 'No hay mas usuarios'
            }

        }



        getUsers()

    }
}
</script>

<style scoped>
    h2 {
        text-align: center;
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul {
        width: 250px;
    }

</style>