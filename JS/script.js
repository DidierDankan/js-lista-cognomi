console.log('js ok!')



//crare una array con dei cognomi diversi
//chiedere allo utente di scrivere i suo cognomi e agiungerlo alla array
//stampare il array in ordine alfabetica
//e stampare la posizione del cognomi dell'utente nella array

//creando la array

var lastNameList = ['Cavanni','Fabri','Trittonni','Zingaro', 'Pazienza','Dankan'];

console.log(lastNameList);

var clientLastName = prompt('What is your last name?');

console.log(clientLastName);
console.log(lastNameList.push(clientLastName));
console.log(lastNameList.sort());
console.log(lastNameList.indexOf(clientLastName));

// var clientLastName = '';


// do {
//     clientLastName = prompt('What is your last name?');
// } while (i < lastNameList.length)

// for (var i = 0; i < lastNameList.length; i++) {
//     clientLastName = prompt('What is your last name?');
//     console.log(clientLastName);
//     console.log(lastNameList.push(clientLastName));
//     console.log(lastNameList.sort())
//     console.log(lastNameList.indexOf(clientLastName))
//     break;
// }

