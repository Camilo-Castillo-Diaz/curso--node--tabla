const fileSysten = require("fs"); // forma de crear docummentos txt
const color = require("colors") // colocarle colores alos textos
// tabla de multiplicar con funciones asincronas 

const crearAcrhivoTabla = async (base = 5, listar = false, hasta = 10) => {
  try {


    let salida, consola = ""


    for (let i = 1; i <= hasta; i++) {
      salida += ` ${base} x ${i} = ${base * i}\n`
      consola += ` ${base} ${"x".red} ${i} = ${base * i}\n`


    }
    if (listar) {

      console.log("=====================".green)
      console.log("Tabla de : ", color.blue(base))
      console.log("=======================".green)
      console.log(consola)
    }

    // fileSysten.writeFileSync(`tabla del ${base}.txt`, salida, (err) => {
    //     if (err) throw err
    //     console.log("creado con exito el documento tx")
    // })

    // 2 forma 

    fileSysten.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return (`tabla-${base}.txt `)


  } catch (err) {
    throw err
  }


}


module.exports = {
  crearAcrhivoTabla
}