/*Operaciones aritmeticas
Una operación aritmética típica opera con dos números.
Los dos números pueden ser literales:*/

/*
let primeraSuma = 100;
let segundaSuma = 200;
let resultado = primeraSuma + segundaSuma;
alert(resultado)
*/

/*expreciones

let primeraSuma = 2;
let resultado = (20 + 20) * primeraSuma;

alert(resultado);


let max= 57;
let actual= max - 13;
let percentage= actual / max;
console.log(percentage)


let name="gonzalo";
alert(`hello,${name}!`);

let one="hello";
let two="how's it going?";
let saludo=`${one},${two}!`;
console.log(saludo)

const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."
*/

/*longitud de cadena
let txt = "hi how's it going?";
let length = txt.length;
alert(length)

let str = "Apple, Banana, Kiwi";
let part = str.slice(14, 19);
console.log(part)

let text1 = "      Hello World!      ";
let text2 = text1.trim();
alert(text2)

let hora ="7";
if(hora >8 || hora < 18){
  
  alert("hay que estudiar.");
}

let year = prompt('en que año se retiro juan roman riquelme', '');

if (year == 2015) alert( 'You are right!' );*/
/*
let camino=prompt("¿Que caminos vas a elegir?");

  if(camino == "derecha"){
    alert("Mmm...Camino sin peligro, Pero muy largo")
  }else if(camino == "izquierda"){
    alert("MUY PELIGROSO! Pero cruzaras muy rapido")
  }else if (camino == "volver atras"){
    alert("¡Eso es de cobardes!")
  }*/
/*
const myName = "Gonzalo";
const myStr = "My name is " + myName + " ,and I am well";
alert(myStr);

const someAdjective = "really hard";
let myStr = "Learning to code is ";
myStr += someAdjective; 
alert(myStr)

const someAdjective = "really hard";
let myStr = "Learning to code is ";
myStr += someAdjective; 
alert(myStr)


let primerNombre ="gonzalo";
let segundaLetra = primerNombre[1]

alert(segundaLetra)
*/
/*
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Cambia solo el código debajo de esta línea
const wordBlanks = "myNoum " +"myAdjectuve " + "myVerb " + "myAdverb"+ ".";
alert(wordBlanks)
*/

//array//
/*
const myArray = [50, 60, 70];
let myData = myArray[2];
alert(myData)*/
/*
const ourArray = [50, 40, 30];
ourArray[0] = 15;
alert(ourArray)
*/
const pregunta = [
  ["dormir", "seguir buscando", "sacar arma"],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const miDecision = pregunta[0][1];
alert(miDecision)