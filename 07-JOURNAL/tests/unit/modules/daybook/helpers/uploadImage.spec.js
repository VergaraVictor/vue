describe('Pruebas en la función uploadImage', () => {
    test('debería cargar un archivo y devolver una URL válida', () => {
        // Aquí iría el código de la prueba
    });
});

// Este es el codigo de acuerdo fernando pero me genero errores que no me permitio continuar
// import cloudinary from 'cloudinary'
// import axios from 'axios'

// import uploadImage from '@/modules/daybook/helpers/uploadImage'

// cloudinary.config({
//     cloud_name: 'ddqwpq9qq',
//     api_key: '721435814739951',
//     api_secret: 'm8_VBxnZcresh_fhL0mViUUHFxg'
// })


// describe('Pruebas en el uploadImage ', () => {
    
//     test('debe de cargar un archivo y retornar el url', async( done ) => {
        
//         const { data } = await axios.get('https://res.cloudinary.com/ddqwpq9qq/image/upload/v1712632643/v2kpzvsgdmoasnlmpzef.jpg', {
//             responseType: 'arraybuffer'
//         })

//         const file = new File([ data ], 'foto.jpg')

//         const url = await uploadImage( file )

//         expect( typeof url ).toBe('String')


//         // Tomar el ID
//         const segments = url.split('/')
//         const imageId = segments[ segments.length - 1 ].replace('.jpg','')
//         cloudinary.v2.api.delete_resources( imageId, {}, () => {
//             done()
//         })

        
//     })
    

// })



