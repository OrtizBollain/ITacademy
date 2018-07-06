// FASE 1

// var myNameArray = ['D','A','V','I','D'];
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

// var myNameArray = ['D','A','V','1','D'];
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

var myNameArray = ['D','A','V','I','D'];
var arrayLength = myNameArray.length;
var myLetter_count = {};


for (var i = 0; i < arrayLength; i++) {
  if(myLetter_count[myNameArray[i]] == undefined){
    myLetter_count[myNameArray[i]]=1;
  }
  else  {
    myLetter_count[myNameArray[i]]++;
  }
}
for (var i in myLetter_count) {
  console.log(i + " = " + myLetter_count[i]);
}
