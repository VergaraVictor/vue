import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecision.vue'

describe('Indecision component', () => {
    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount( Indecision )
    })

    test('debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('escribir en el input no debe disparar nada (console.log)', () => {

    })

    test('escribir el simbolo de "?" debe de disparar el fetch', () => {

    })

    test('prueba en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })



})