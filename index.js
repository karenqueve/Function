//**Iteración #1: Buscar el máximo**
//Completa la función que tomando dos números como argumento devuelva el más alto.

//function sum(numberOne , numberTwo) {

//if(numberOne>numberTwo){
//return numberOne;
//}      else {
// return numberTwo;
//}
//}
//console.log(sum (11,5));

//**Iteración #2: Buscar la palabra más larga**
//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
//function findLongestWord(param) {
//let otraVar = '';

//for (const newIteration of param) {
    //if (newIteration.length > otraVar.length){

      //otraVar = newIteration;

    //}
  //}
//return otraVar;
//}
//console.log(findLongestWord(avengers));

//**Iteración #3: Calcular la suma**
//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 


//const numbers = [1, 2, 3, 5, 45, 37, 58];

//function sumAll(param) {

//return 1 + 2 + 3 + 5 + 45 + 37 + 58;
//}

//let resulNum = sumAll ( 2, 3, 5, 45, 37, 58);

//console.log(resulNum);



//**Iteración #4: Calcular el promedio**
//Calcular un promedio es una tarea extremadamente común.

//const numbers = [12, 21, 38, 5, 45, 37, 6];

//function average(param){
//let suma = 0;
//let resultNumb = 0;

//for (const iterator of param) {

//resultNumb += iterator;
//}
// return suma/resultNumb;
//}

//console.log(average(numbers));

//**Iteración #5: Calcular promedio de strings**
//Crea una función que reciba por parámetro un array 
//y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

//const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

/*let listNumber = 0;

function averageWord(param){
 for (let elements of param) {
   if(typeof elements === "number") {
     listNumber += elements;
   }
   if(typeof elements === "string") {
     listNumber += elements.length;
   }
 }
 return listNumber;
}
console.log(averageWord(mixedElements));*/


//**Iteración #6: Valores únicos**
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//en caso que existan los elimina para retornar un array sin los elementos duplicados. 

//primer paso:crea una funcion
//segundo: que reciba un parametro q sea un array
//2.1 recorrer mi array 
//tercero una comprobacion si se repiten elementos
//cuarto borrar elementos repetidos
//quinto que la funcion retorne el array modificado

//const duplicates = [
//'sushi',
  //'pizza',
  //'burger',
  //'potatoe',
  //'pasta',
 // 'ice-cream',
 // 'pizza',
  //'chicken',
  //'onion rings',
  //'pasta',
  //'soda'
//];

//yaComprobadas = [];

//function newDuplicate(array) {
  //for (let i = 0; i < array.length; i++) {

   // if (!yaComprobadas.includes(array[i])) {
    //  yaComprobadas.push(array[i]);
    //}

 // }

 // console.log(yaComprobadas);
//}
//newDuplicate(duplicates);

//*Iteración #7: Buscador de nombres**
//Crea una función que reciba por parámetro un array 
//y el valor que desea comprobar que existe dentro de dicho array - 
//comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento 
//y por la contra un false. 

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName (namesArray, searchName) {

  let result = false;
  for (let index = 0; index < namesArray.length; index++) {
    if (namesArray[index] === searchName) {
      
      result = index;
    }
  }
  return result;
}

console.log(finderName(nameFinder, "Natasha"));
console.log(finderName(nameFinder, "Elas"));
console.log(finderName(nameFinder, "Xabier"));


/**Iteration #8: Contador de repeticiones**

Crea una función 
que nos devuelva el número de veces que se repite 
cada una de las palabras que lo conforma.  

/*const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

 function repeatCounter(list) {

    const count = {};
     list.forEach((word) => {
  if (count[word] === undefined) {
    count[word] = 1;
  } else {
    count[word] = count[word] + 1;
  }
});
return count;
}

console.log(repeatCounter(counterWords));
 */