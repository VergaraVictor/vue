<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este pokémon?</h1>

        <pokemon-picture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon" 
        ></pokemon-picture>

        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
        />
    </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log( getPokemonOptions() )

export default {
    components: { PokemonOptions, PokemonPicture },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            
            const rndInt = Math.floor( Math.random() * 4 )
            console.log(rndInt)
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( pokemonId ) {
            this.showPokemon = true
        }
    },
    mounted() {
        this.mixPokemonArray()
    }

}
</script>

<style>

</style>