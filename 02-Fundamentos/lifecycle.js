// Verificar cual es el ciclo de vida.
// Vamos a definir una variable Usuario.
console.log('Bienvenidos al ejemplo. Ciclo de vida NODE');
console.log('En este ejempl vamos a revisar como funciona la pila');

console.log('Recuperando usuarios.... ');

function getUser(user) {
    console.log(`Recuperado el usuario ${user} `);
};
//Calbacks- Una forma sencilla de definirlo, es aquello que ocurre cuando invocamos una función. En nuestro caso, cuando ejecutemos
//la función setTimeout con un tiempo de espera estaremos ejecutando el callbak, que aquí no es otra cosa que la función
//
setTimeout(function (){
    getUser("User One with time out 3000 ms")
}, 3000);
setTimeout(function (){
    getUser("User Two without time out")
}, 0);
setTimeout(function (){
    getUser("User Three without time out")
}, 0);

console.log('Fin de la tarea de recuperar usuarios. ');

