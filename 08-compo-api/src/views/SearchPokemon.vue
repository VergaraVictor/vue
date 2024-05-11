<template>
    <h1>Buscar pokémon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <input
            type="number"
            placeholder="Número del pokémon"
            autofocus
            v-model="pokemonId"
        >
    </form>
    <br>
    <span>Presione enter para Buscar</span>  
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    
    setup() {

        const router = useRouter()
        
        const pokemonId = ref(1)
        
        return {
            pokemonId,

            onSubmit: () => {
                // console.log('pokemon a buscar:', pokemonId.value )
                router.push({name: 'pokemon-id', params: {id: pokemonId.value } })
            }
        }
    }
}
</script>