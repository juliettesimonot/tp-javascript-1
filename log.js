//Initialisation

console.log("Hello World");

//Tp-2 - console
let nom = "Simonot";
let prenom = "Juliette";
console.log(prenom+" "+nom);


//tp-3 - alert - confirm
/*alert("Ceci est une alerte");
confirm("Merci de cliquer sur le bouton");*/

//tp-4 - alert condition
/*let confirmAlert = confirm("Cliquez sur ok !");

if(confirmAlert){
    alert("Bienvenue");
}else{
    alert("À Bientôt");
}*/


//tp-5 - prompt
/*let userMessage = prompt("Saisir votre prenom");

console.log("Votre prenom est " + userMessage);*/

//tp-6 - verif
/*let userMessage = prompt("Comment tu t'appelles?");

if(userMessage.length>0 && userMessage.length<11){
    alert("Bonjour "+userMessage);
}else{
    alert("Erreur saisie");
}*/

//tp-7
/*let nombre = 7;
console.log(typeof nombre);
let myString = String(nombre);
console.log(myString);
let chaineDeCaractere = "mon texte";
console.log(chaineDeCaractere);
let chaineToInt = Number(chaineDeCaractere);
console.log(chaineToInt);*/

function log(message){
    console.log(message);
}

log("Hello");
log("Bye Bye");


