/**
 * Las promeas nos permiten  ejecutar un trabajo (asincronno o sincrono ) 
 * y despues de realizar la tarea realizar una tarea pàrticular.
 * 
 * 
 */

let users = [{
        idUser: 1,
        name: 'John Doe'
    },
    {
        idUser: 2,
        name: 'Jane Doe'
    }, {
        idUser: 3,
        name: 'Periquito de los palotes'
    },
    {
        idUser: 4,
        name: 'Menganito de tal'
    }
];

let salarios = [{
            id: 1,
            salario: 3000
        },
        {
            id: 2,
            salario: 4000
        }, {
            id: 3,
            salario: 5000
        }
    ]
    //En este caso norecibiremos un allback, solo recibiremos el Identificador
let getUser = (idUser) => {
    // Necesitaremos devolver una promesa, que recie dos callbacks. 
    // El resolve que se ejcuta cuandola llamada se realzia de manera exitosa, 
    // y el reject cuando se produce un error en la llamada.
    return new Promise((resolve, reject) => {
        let anUser = users.find(user => user.idUser === idUser);
        if (!anUser)
            reject(` El usuario con id ${idUser} no existe`);
        else resolve(anUser);

    });

    // console.log(`User Recuperado: ${anUser.name}`);
}

let getSalario = (user) => {
    console.log('Buscando el salario....', user);
    return new Promise((resolve, reject) => {
        let salario = salarios.find(salario => salario.id === user.idUser);
        if (!salario)
            reject(`No existe salario asignado al usuario ${user.name}`)
        else {
            resolve({
                id: user.idUser,
                name: user.name,
                sueldo: salario.salario
            });
        }
    });

    //return salario;
}

// Recuperamos un usuario valido

getUser(1).then(
    user => {
        console.log('Usuario recuperado ', user);
        getSalario(user).then(
            response => { console.log(response); },
            anotherError => { console.log(anotherError); }
        )
    }, error => {
        console.log(error);
    }
)

// Recuperamos un usuario que  no tiene sueldo asignado. 
getUser(4).then(
        user => {
            console.log('Usuario recuperado ', user);
            getSalario(user).then(
                //En caso de tener una repuesta correcta.........
                response => { console.log(response); },
                //En caso  de tener un error 
                error => { console.log(error); }
            )
        }, error => {
            console.log(error);
        }
    )
    /** 
     * Ejemplo de promesas encadenadas,
     */
getUser(2).then(
        user => {
            return getSalario(user);
        })
    //Tratamos el resultado de la promesa  getSalario.
    .then(
        response => {
            console.log(response);
        })
    //capturamos los errores de cualquiera de las promesas encadenadas.
    .catch(error => {
        console.log('Error en la prueba de promesas encadenadas', error);
    });