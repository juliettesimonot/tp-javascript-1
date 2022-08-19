
let userName ="";
do{
   userName= prompt("Entrez votre prenom");
} while(userName.length<=0);

let reponse = false;
do{
    reponse = confirm("Répondre oui pour continuer");
}while(reponse == false);