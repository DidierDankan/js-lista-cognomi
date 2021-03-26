//crare una array con dei cognomi diversi
//chiedere allo utente di scrivere i suo cognomi
//agiungerlo alla array
//stampare il array in ordine alfabetica
//e stampare la posizione del cognomi dell'utente nella array


var cognomiDive = ['assurdo', 'carruzzi', 'valentinni', 'della mancha']
console.log(cognomiDive)

var cognomiUtentti = prompt('inserisce il tuo cognomi').toLowerCase();

while ( (isNaN(false)) || (cognomiUtentti == null) ) {
        var cognomiUtentti = prompt('prego, il tuo cognomi, perfavore').toLowerCase();
}

var cognomiUtentti = cognomiUtentti.trim();

cognomiDive.push(cognomiUtentti);

console.log(cognomiDive.sort());

console.log(cognomiDive.indexOf(cognomiUtentti) + 1)











//creando la array

// var lastNameList = ['cavanni','fabri','trittonni','zingaro','pazienza','dankan'];
// var clientLastName = prompt('What is your last name?').toLowerCase().trim();


// console.log(lastNameList);    
// console.log(lastNameList.push(clientLastName));
// console.log(lastNameList.indexOf(clientLastName)); 
// console.log(lastNameList.sort()); 
// console.log(lastNameList.indexOf(clientLastName) + 1); 


// // console.log(lastNameList.sort());
// var result = '';

// for (var i = 0; i < lastNameList.length; i++ ) {
//      result += '<li> ' + lastNameList[i] + '</li>';
//      document.getElementById('listnames').innerHTML += '<li>' + lastNameList[i] + '</li>';
//}
// console.log(lastNameList.indexOf(clientLastName) + 1);



