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


let getUser = (idUser, callback) => {
    // El metodo find de un array admite una función, En este caso devolveremos el usuario que se corresponda
    // con idUsuario recibido.
    /*
        0 == false   // true
        0 === false  // false, because they are of a different type
        1 == "1"     // true, automatic type conversion for value only
        1 === "1"    // false, because they are of a different type
        null == undefined // true
        null === undefined // false
        '0' == false // true
        '0' === false // false
        */
    let anUser = users.find(user => user.idUser === idUser);
    if (!anUser)
        callback(` El usuario con id ${idUser} no existe`);
    else callback(null, anUser);

    // console.log(`User Recuperado: ${anUser.name}`);
}

let getSalario = (user, callback) => {
        console.log('Buscando el salario....');

        let salario = salarios.find(salario => salario.id === user.idUser);
        if (!salario)
            callback(`No existe salario asignado al usuario ${user.name}`)
        else {
            callback(null, {
                id: user.idUser,
                name: user.name,
                sueldo: salario.salario
            });
        }
        //return salario;
    }
    //
getUser(4, (error, user) => {
    if (error) { return console.log(error); }
    //console.log(user);
    getSalario(user, (error, response) => {
        if (error)
            return console.log(error);

        console.log(`El salario de ${response.name} es de ${response.sueldo}`);
    })

});