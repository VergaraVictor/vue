import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage' 
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    })
    test('debe de hacer match con el snapshot', () => {

        expect( wrapper.html() ).toMatchSnapshot()
    })
    test('debe de llamar mixPokemonArray al montar', () => {

        const mixPokemonArraySpy  = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        wrapper = shallowMount( PokemonPage )

        expect( mixPokemonArraySpy ).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return{
                    pokemonArr: [pokemons],
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    mesage: ''
                }
            }
        })
        
        expect( wrapper.html() ).toMatchSnapshot()
    })
})