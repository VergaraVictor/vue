import daybookRouter from '@/modules/daybook/router'

describe('Pruebas en el router module del Daybook', () => {

    test('el route debe de tener esta configuración', async() => {

        expect( daybookRouter ).toMatchObject({
            name: 'daybook',
            component: expect.any( Function ),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any( Function ),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any( Function ),
                    props: expect.any( Function )
                }            
            ]
        })

        // expect( (await daybookRouter.children[0].component()).default.name ).toBe('NoEntrySelected')
        // expect( (await daybookRouter.children[1].component()).default.name ).toBe('EntryView')
        // HAcerlo mas Flexible
        const promiseRoutes = []
        daybookRouter.children.forEach( child => promiseRoutes.push( child.component() ) )

        const routes = (await Promise.all( promiseRoutes )).map( r => r.default.name)

        expect( routes ).toContain('EntryView')
        expect( routes ).toContain('NoEntrySelected')

    })


})