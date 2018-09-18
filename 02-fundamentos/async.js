/** 
 * Async | Await sample
 * ASYNC (@see https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona)
 * 
 * Async functions are not supported by Node versions older than version 7.6.
 * La declaración de función async define una función asíncrona, la cual devuelve una Promesa.
 * 
 * Sintaxis
 *   async function name([param[, param[, ... param]]]) {
 *       statements
 *   }
 *   Parámetros
 *      - name:   El nombre de la función.
 *      - param: El nombre de un argumento que se debe pasar a la función.
 *      - statements
 *          Las declaraciones que conforman el cuerpo de la función.
 *      -Valor de retorno
 *           Un objeto AsyncFunction, que representa una función asíncrona que ejecuta el código contenido dentro 
 *           de la función.
 *
 *  Descripción 
 *      Cuando se llama a una función async, esta devuelve un elemento Promise. 
 *      Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto.
 *      Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.
 * 
 *      Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y 
 *      espera la resolución de la Promise pasada y, a continuación, readuna la ejecución de la función async y
 *       devuelve el valor resuelto.
 *      
 *      La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas y 
 *      realizar algún comportamiento específico en un grupo de Promises. Del mismo modo que las Promises son
 *      semejantes a las devoluciones de llamadas estructuradas, async/await se asemejan a una combinación
 *      de generadores y promesas.
 */


let getUser = async() => {
    return 'Hola benauca..........';
}

getUser().then(
    response => console.log('Esperamos la salida:' + response)
).catch(
    error => console.log('Error', e)
);