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

        <div v-if="showAnswer">
            <h2 class="fade-in">{{ mesage }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </div>
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
            showPokemon: false,
            showAnswer: false,
            mesage: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            
            const rndInt = Math.floor( Math.random() * 4 )
            console.log(rndInt)
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( selectedId ) {
            this.showPokemon = true
            this.showAnswer  = true

            if( selectedId === this.pokemon.id ) {
                this.mesage = `Correcto, ${ this.pokemon.name}`
            } else {
                this.mesage = `Oops, era ${ this.pokemon.name }`
            }
        },
        newGame() {
           
            this.showPokemon = false
            this.showAnswer  = false
            this.pokemonArr  = []
            this.pokemon     = null
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }

}
</script>

<style>

</style>