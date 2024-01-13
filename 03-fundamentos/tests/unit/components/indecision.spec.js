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
})