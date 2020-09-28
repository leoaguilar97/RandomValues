
module.exports = (tblObject) => {

    let table = tblObject.tabla
    let criterio = tblObject.criterio;

    // Definir aca como filtrar el valor a agregar
    let seleccion = tblObject.seleccion;

    // Definir si es por columnas (true) o por filas (false)
    let verPorColumnas = tblObject.verPorColumnas;

    // Definir cuantos valores son necesarios
    let cantidadDeValores = tblObject.cantidadDeValores;
    // Definir si necesita reemplazo
    let conReemplazo = tblObject.conReemplazo;

    // Obtener datos
    const size = table.size();

    let iteraciones = verPorColumnas ? size[1] : size[0];
    let rawResult = [];
    let localResult = [];

    for (let i = 0; i < iteraciones; i++) {
        let iterable = verPorColumnas ? table([], i) : table(i);

        localResult = iterable.map(v => { return seleccion(v + "") * 1; }).filter(criterio);

        for (value of localResult) {
            rawResult.push(value);
        }
    }

    if (!conReemplazo) {
        rawResult = Array.from(new Set(rawResult));
    }

    let result = [];

    if (cantidadDeValores > rawResult.length) {
        console.log("****** ADVERTENCIA *********");
        console.log("Se estan seleccionando mas valores de los que existen en el arreglo: " + rawResult.length);
    }

    for (let i = 0; i < cantidadDeValores; i++) {
        result.push(rawResult[i % rawResult.length]);
    }

    for (value of result) {
        console.log(value);
    }
};