import { shallowMount } from '@vue/test-utils'
import pokemoPicture from '@/components/pokemonPicture'

describe('pokemonPicture component', () => {

    test('debe de hacer match con el snapshot', () => {
        
        const wrapper = shallowMount( pokemoPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    
    
    })


    test('debe de mostrar la imagen oculta y el pokemon 100', () => {

    })

    test('debe de mostrar el pokemon si showPokemon:true', () => {

    })
})