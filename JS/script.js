console.log('js ok!')
//correzioni 


// //list cognomi
// var listCognomi = ['bianchi', 'neri', 'verdi', 'rosso', 'gialli']


// //chiedere il cognomi

// var userCognomi = prompt();

















//crare una array con dei cognomi diversi
//chiedere allo utente di scrivere i suo cognomi e agiungerlo alla array
//stampare il array in ordine alfabetica
//e stampare la posizione del cognomi dell'utente nella array

//creando la array

var lastNameList = ['cavanni','fabri','trittonni','zingaro','pazienza','dankan'];
var position = [1,2,3,4,5,6];
var clientLastName = prompt('What is your last name?').toLowerCase().trim();


for (var i = 0; i < lastNameList.length; i++) {
    console.log(position[i]);
    console.log(lastNameList[i]);       
 }

if (lastNameList.push(clientLastName)) {
    position = [1,2,3,4,5,6,7];
} 

console.log(lastNameList.indexOf(clientLastName));


console.log(lastNameList.sort());
var result;

for (var i = 0; i < lastNameList.length; i++ ) {
    result = position[i] + ' - ' + lastNameList[i];
    console.log(result);

}
console.log(lastNameList.indexOf(clientLastName) + 1);


// document.getElementById('listnames').innerHTML += '<li>' + position[i] + lastNameList[i] + '</li>';


//forze dovrei pescare il indice della array clientLastName.

// if (isNaN(clientLastName)) {
//     console.log(lastNameList.push(clientLastName));
//     console.log(lastNameList.sort());
//     console.log(lastNameList.indexOf(clientLastName));
// } else {
//     prompt('please, insert your last name?').toLowerCase().trim();
// }

// console.log(lastNameList.push(clientLastName));
// console.log(lastNameList[i]);
// console.log(lastNameList.indexOf(clientLastName));

// var size = 7
// var counter = 0

// do {
//     var clientLastName = prompt('What is your last name?').toLowerCase().trim();
// }
// while (isNaN(clientLastName)) {
//     lastNameList.push(clientLastName);
//     console.log(lastNameList.sort());

//     counter++
// }




// console.log(clientLastName);
// console.log(lastNameList.push(clientLastName));
// console.log(lastNameList.sort());
// console.log(lastNameList.indexOf(clientLastName));

// var numbers = [1,2,3,4,5,6]

// var i = lastNameList - 1;

// while (i >= 0 ) {
//    var fusion = numbers[i] + lastNameList[i];
//    console.log(fusion);
//  }

// var fusion = numbers + lastNameList;
// console.log(fusion);








// var clientLastName = '';


// do {
//     clientLastName = prompt('What is your last name?');
// } while (i < lastNameList.length)

//  for (var i = 1; i < lastNameList.length - 1; i++) {
//      clientLastName = prompt('What is your last name?');
//      console.log(clientLastName);
//      console.log(lastNameList.push(clientLastName));
//      console.log(lastNameList.sort())
//      console.log(lastNameList.indexOf(clientLastName))
//      break;
//  }

