import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from '@/modules/daybook/helpers/uploadImage'

cloudinary.config({
    cloud_name: 'ddqwpq9qq',
    api_key: '721435814739951',
    api_secret: 'm8_VBxnZcresh_fhL0mViUUHFxg'
})


describe('Pruebas en el uploadImage ', () => {
    
    test('debe de cargar un archivo y retornar el url', async( done ) => {
        
        const { data } = await axios.get('https://res.cloudinary.com/ddqwpq9qq/image/upload/v1713325620/zlmszrvyai4uexlr3cur.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')


        // Tomar el ID
        const segments = url.split('/')
        const imageId = segments[ segments.length - 1 ].replace('.jpg','')
        cloudinary.v2.api.delete_resources( imageId, {}, () => {
            done()
        })

        
    })
    

})



