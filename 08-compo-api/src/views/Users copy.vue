<template>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="{ first_name, last_name, email, id } in users" :key="id">
                <h4>{{  first_name }} {{ last_name }}</h4>
                <h6>{{ email }}</h6>
            </li>
        </ul>
    </div>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span>Página: {{ currentPage }}</span>

</template>

<script>
import {ref} from 'vue'
import axios from 'axios'


export default {
    
    setup() {

        const users          = ref([])
        const isLoading     = ref(true)
        const currentPage   = ref(1)
        const errorMessage = ref()

        const getUsers = async( page = 1) => {
            
            if ( page <= 0 ) page = 1

            isLoading.value = true

            const { data } = await axios.get('https://reqres.in/api/users', {
               params: { page }                 
            })

            if( data.data.length > 0 ) {
                users.value = data.data
                currentPage.value = page
                errorMessage.value = null
            } else if ( currentPage.value > 0 ){
                errorMessage.value = 'No hay mas usuarios'
            }

            isLoading.value = false

        }

        getUsers()


        return {            
            currentPage,
            errorMessage,
            isLoading,
            users,

            nextPage: () => getUsers( currentPage.value + 1),
            prevPage: () => getUsers( currentPage.value - 1),
        }
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