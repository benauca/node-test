/**
 * 
 * 
 * Sintaxis
    = await expression;
    expression
        Una Promise o cualquier otro valor por el cual haya que esperar.
        rv
        Regresa el valor terminado de la promesa o solamente un valor si no es unaPromise.

        Descripción
        La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea 
        terminada o rechazada, y regresa a la ejecución de la función async después del término. 
        Al regreso de la ejecución, el valor de la expresión await es la regresada por una promesa terminada.

        Si la Promise es rechazada, el valor de la expresión await tendrá el valor de rechazo.

        Si el valor de la expresión seguida del operador await  no es una promesa, será convertido a una resolved Promise.

        Ejemplos
        Si una Promise se pasa a una expresión await, espera a que la Promise se resuelva y devuelve el valor resuelto.

            function resolveAfter2Seconds(x) { 
            return new Promise(resolve => {
                setTimeout(() => {
                resolve(x);
                }, 2000);
            });
            }

            async function f1() {
            var x = await resolveAfter2Seconds(10);
            console.log(x); // 10
            }
            f1();
            Si el valor no es una Promise, convierte el valor a una Promise resuelta, y espera por dicho valor.

            async function f2() {
            var y = await 20;
            console.log(y); // 20
            }
            f2();
            Si la Promise es rechazada, se lanza una excepción con dicho el valor.

            async function f3() {
            try {
                var z = await Promise.reject(30);
            } catch(e) {
                console.log(e); // 30
            }
            }
            f3();
 */

let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Benauva');
        }, 3000);

    });
}



//Si dejamos la función así. El resultado en la consola sería Undefined ya que se recupera el valor antes de que lo devuelva

//getName().
//then(saludo => { console.log(saludo); }).
//catch(error => { console.log('Se ha producido un error', error); })

// Para acceder al valor deberemos usar "await". Siempre debe ir precedido de una funcion await
let saludo = async() => {
    let name = await getName();
    return 'Hi ' + name;

}
saludo().then(
    mensaje => { console.log(mensaje); }
)