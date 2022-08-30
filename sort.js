let userChoice = prompt("Choisir entre 3 sorts :Boule de feu - Trait de glace - Chaine d'éclair");
let degat;

function sort(){
    switch (userChoice.toLowerCase()) {
        case "boule de feu":
            alert("Vous avez choisi la boule de feu, dégâts = 40");
            degat = 40;
            break;
        case "trait de glace":
            alert("Vous avez choisi le trait de glace, dégâts = 35");
            degat = 35;
            break;
        case "chaine d'éclair":
            alert("Vous avez choisi la chaine d'éclair, dégâts = 25");
            degat = 25;
            break;
    
        default:
            throw new Error("Sort inconnu");
    }
    alert("Vous avez choisi"+userChoice+" : degat = "+degat);
}

try {
    sort();
} catch (error) {
    alert(error);
}




// try {
//     console.log(userChoice);
//     userChoice = userChoice.toLowerCase();
//     if(userChoice == "boule de feu"){
//         alert("Vous avez choisi la boule de feu, dégâts = 40");
//     }else if(userChoice=="trait de glace"){
//         alert("Vous avez choisi le trait de glace, dégâts = 35");
//     }else if(userChoice=="chaine d'éclair"){
//         alert("Vous avez choisi la chaine d'éclair, dégâts = 25");
//     }
// } catch (e) {
//     alert("Sort inconnu")
// }