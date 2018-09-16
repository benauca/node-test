/**
 *  Las funciones de callbacks son funcione que se ejecutan espues de haber  ejecutado otra función. 
 *  Es decir son fucniones embebidas en otras funciones 
 */
console.log('Bienvenido al Ejemplo de callbacks');

/**Para definir una funcion callback haremos uso de funciones flecha */

/** En este caso se define una funcion flecha llamada toString que recibiendo un parámetro lo pinta por pantalla */
let toString = (param1, param2) => {
    console.log(`Parametros recibidos ${param1} ${param2}`);;
};

let suma = (a, b) => {
    console.log(a + b);
}


toString('Parametro1', 'Parametro2');
suma(34, 54);

/** ahora que tenemos claro que es una funcion de flecha, vamos a ver como definir una funcion callback */
/** en nnuesro caso la funcion buscar usuario recibira como parametro otra funcion que pintará el resultado del  objeto encontrado. */
let findUser = (idUser, myCallback) => {
        //Simula la llamada a la BBDD para recuperar el usuario.
        let user = {
            name: 'John Doe'
        }
        console.log(`Usuario Recuperado ${user.name}`);
        myCallback(user.name);
        return user;
    }
    //De esta foma el callback dependerá de cuando llamemos a nuestra funcion, que queramos hacer con el  resultado.
findUser(24, (myUser) => {
    console.log(`Cuando recuperamos el usuario,pintaremos el resultado Mayusculas${myUser.toUpperCase()}`);
});

//De esta foma el callback dependerá de cuando llamemos a nuestra funcion, que queramos hacer con el  resultado.
findUser(24, (myUser) => {
    console.log(`Cuando recuperamos el usuario,pintaremos el resultado Minuscukas ${myUser.toLowerCase()}`);
});