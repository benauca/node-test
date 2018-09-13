console.log("Introduce tu nomnbre:");
let stdin = process.openStdin();

//OJO: El campo se debe de llamar data.
  //stdin.addListener("data", function(d) {
  stdin.addListener("data", d => {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    let name=d.toString().trim();
    console.log(`Hola ${name}`);
    process.exit();
  });
  
