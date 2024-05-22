import useAuth from '@/modules/auth/composables/useAuth' 

const mockStore = {
    dispatch: jest.fn(),
    // Commit
    // Getters
}

jest.mock('vuex', () => ({
    useStore: () => mockStore
}))


describe('Pruebas en useAuth', () => {


    beforeEach( ()=> jest.clearAllMocks() )


    test('createUser exitoso', async() => {

        const { createUser } = useAuth()

        const newUser = { name: 'Victor', email: 'victor@gmail.com' }
        mockStore.dispatch.mockReturnValue({ ok: true })

        const resp = await createUser( newUser )

        expect(mockStore.dispatch).toHaveBeenCalledWith('auth/createUser', {'email': 'victor@gmail.com', 'name': 'Victor'} )
        expect(resp).toEqual({ ok: true })

    })


})