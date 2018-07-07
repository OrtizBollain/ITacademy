// FASE 1

// var name = "DAVID"
// var myNameArray = name.split("");
// var arrayLength = myNameArray.length;
// var myName = '';

// for (var i = 0; i < arrayLength; i++) {
//   myName += myNameArray[i];
// }
// console.log(myName);

// FASE 2
// Al bucle, si la lletra és una vocal imprimeix a la consola: ‘VOCAL’. Sinó, imprimeix: ‘CONSONTANT’. 
// ○ Es pot fer de diferents formes: 
// 1. Creant una nova array que contingui les vocals (A, E, I, O, U) i comprovant si cadascuna de les lletres del teu nom és en aquesta array amb el mètode indexOf 
// 2. Comprovar si cadascuna de les lletres del teu nom és igual a ‘a’, ‘e’, ‘i’, ‘o’, ‘u’ concatenant les comprovacions amb ||  
// ○ Extra: Si trobes un numero, mostra per pantalla: ‘Els noms de persones no contenen números!’.  

// var name = "DAVID"
// var myNameArray = name.split("");
// var arrayLength = myNameArray.length;
// var myName = '';
// var letter = "";

// for (var i = 0; i < arrayLength; i++) {
//   if (myNameArray[i] === 'A' || myNameArray[i] == 'E' || myNameArray[i] == 'I' || myNameArray[i] == 'O' || myNameArray[i] == 'U') {
//     letter = " VOCAL"
//   }
//   else if (myNameArray[i] >= 0 || myNameArray[i] <0){
//     letter = " Els noms de persones no contenen números!"
//   }
//   else{
//     letter = " CONSONANT"
//   }
//   myName = myNameArray[i];
//   console.log(myName+letter);
// }

// FASE 3
// Pensa una forma per emmagatzemar tant les lletres del array 
// com el nombre de vegades que apareixen i implementa’l. ○ Pista: ​Map   

// var name = "DAVID"
// var myNameArray = name.split("");
// var arrayLength = myNameArray.length;
// var myLetter_count = {};


// for (var i = 0; i < arrayLength; i++) {
//   if(myLetter_count[myNameArray[i]] == undefined){
//     myLetter_count[myNameArray[i]]=1;
//   }
//   else  {
//     myLetter_count[myNameArray[i]]++;
//   }
// }
// for (var i in myLetter_count) {
//   console.log(i + " = " + myLetter_count[i]);
// }


// ● Crea una array amb el teu cognom on cada posició correspongui a una lletra. 
// ● Passa de les dues arrays a una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. 
// És a dir, abans tenies les arrays name i surname i ara només tens una que es dirà fullName.  
// FullName: [‘N’, ‘A’, ‘M’, ‘E’, ‘ ‘, ‘S’, ‘U’, ‘R‘, ‘N’, ‘A’, ‘M’, ‘E’] 
// ● Pista: Feu servir aquesta funció (enteneu què esteu fent) var myFullName = []; myFullName.push(...myName);   


var name = "DAVID";
var surname = "ORTIZ";
var space = "";
var myNameArray = name.split("");
var mySurnameArray = surname.split("");

// OPCIÓN 1
// var myFullName = myNameArray.concat(space, mySurnameArray);

//OPCIÓN 2
var myFullName = [];
myFullName.push(myNameArray, mySurnameArray);


console.log(myFullName);