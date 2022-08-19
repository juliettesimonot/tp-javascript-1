let prenom = prompt("Entrez un prenom");

switch (prenom.toLowerCase()) {
    case "anna":
    case "sophie":
    case "lilya":
        alert("Vous êtes une fille");
        break;

    case "bobby":
    case "bill":
    case "tom":
        alert("Vous êtes une garçon");
        break;

    default:
        alert("Prénom non reconnu");
        break;
}

let age = prompt("Entrez votre âge");
age = parseInt(age);

age>18? alert("Majeur") : alert("Mineur") ;