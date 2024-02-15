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

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
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

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')
        // PokemonPicture debe de existir
        // pokemonOptions debe existir
        expect( picture.exists() ).toBeTruthy()
        expect( options.exists() ).toBeTruthy()
        //PokemonPicture attribute pokemonid === '5'
        expect( picture.attributes('pokemonid') ).toBe('5')
        //PokemonOptions attribute pokemons toBe true
        expect( options.attributes('pokemons') ).toBeTruthy()
        

        
    })
})