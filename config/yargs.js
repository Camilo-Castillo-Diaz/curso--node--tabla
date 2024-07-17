const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "es la base de la tabla de multiplicar"

    }).option("l", { // se usa para usar en los comandos y el tipo de dato que recbe  app --base=9
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false,
        describe: "emuestra la tabla en consola"


    }).option("h", { // se usa para usar en los comandos y el tipo de dato que recbe  app --base=9
        alias: "hasta",
        type: "string",
        demandOption: true,
        default: 10,
        describe: "limite de la tabla"


    })
    .check((argv, options) => {  // manejos  de errores app --base=abc
        if (isNaN(argv.b)) {
            throw "base tiene que ser un numero"
        }
        return true
    })
    .argv // se utliza el paqute para reciir informacion desde la linea de comandos 

// con yeargs
// console.log(argv)
// console.log("base : yargs", argv.base)

// sin yargs
// forma de recibir la imformacion desde la linea de comando forma  node app --base=9

// console.log(process.argv)
// const [, , arg3 ="base = 5"] = process.argv
// const [,base  = 5 ] = arg3.split("=")

// node app help comando para mirar los comandos que tememos para ejecutar la aplicacion  node app -b 8 -l


module.exports = argv