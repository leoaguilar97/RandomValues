
// obtener la tabla
const tablas = require('./tabla');
const S = require('string');

const data = require('./core')({
    // la tabla utilizada
    tabla: tablas.randomTbl,

    dataTbl: tablas.dataTbl,

    // Definir aca el criterio
    criterio: (valor) => { return valor > 0 && valor <= 384; },

    // Definir aca como filtrar el valor a agregar
    // S es para utilizar strings (no cambiar)
    // se puede usar right o left y en el valor enviado se envian cuantos caracteres se utilizan
    // el .s es para obtenerlo como string
    seleccion: (valor) => { return S(valor).right(3).s; },

    // Definir si es por columnas (true) o por filas (false)
    verPorColumnas: true,

    // Definir cuantos valores son necesarios
    cantidadDeValores: 50,

    // Definir si necesita reemplazo (true) o sin reemplazo (false)
    conReemplazo: false
});







