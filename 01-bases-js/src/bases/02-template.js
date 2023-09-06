

const nombre = 'Victor'
const apellido = 'Vergara'

const nombreCompleto = `${nombre} ${apellido}`

//console.log(`${ 1 + 5 }`);

function getSaludo( nombre ) {
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`)