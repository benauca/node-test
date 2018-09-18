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
let getUser = async(idUser) => {
    // Necesitaremos devolver una promesa, que recie dos callbacks. 
    // El resolve que se ejcuta cuandola llamada se realzia de manera exitosa, 
    // y el reject cuando se produce un error en la llamada.

    let anUser = users.find(user => user.idUser === idUser);
    if (!anUser)
        throw new Error(` El usuario con id ${idUser} no existe`);
    else return anUser;

};


let getSalario = async(user) => {
    console.log('Buscando el salario....', user);
    let salario = salarios.find(salario => salario.id === user.idUser);
    if (!salario)
        throw new Error(`No existe salario asignado al usuario ${user.name}`)
    else {
        return ({
            id: user.idUser,
            name: user.name,
            sueldo: salario.salario
        });
    }
};


let getInfo = async(user) => {
    console.log('Buscando el salario....', user);
    let anUser = await getUser(user);
    console.log('Usuario', anUser);
    let sueldo = await getSalario(anUser);
    console.log();
    // if (anUser == null) throw new Error(`Error recuperando el  usuario con id ${user}.`);

};


// Recuperamos un usuario valido
getSalario({
    idUser: 1,
    name: 'John Doe'
}).then(salario => console.log('Salario recibido', salario));