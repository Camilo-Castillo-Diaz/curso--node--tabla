const { crearAcrhivoTabla } = require("./helpers/multiplicar")
const argv = require("../03-bases-node/config/yargs")
const color = require("colors")





console.clear()











// let base = 5
// forma de crear   una tabla de multipilicar exportando la funcion y poniendo el error y el resolvido
crearAcrhivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado"))
    .catch(err => console.log(err))


// el giignore es para ignorar los archvibos y no se suba a git 