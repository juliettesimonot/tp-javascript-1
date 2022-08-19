let userChoice = prompt("Choisir entre 3 sorts : Boule de feu - trait de glace - chaine d'éclair");


function sort(sort){
    if(sort=="boule de feu"){
        alert("Vous avez choisi la boule de feu, dégâts = 40");
    }else if(sort =="trait de glace"){
        alert("Vous avez choisi le trait de glace, dégâts = 35");
    }else if(sort =="chaine d'éclair"){
        alert("Vous avez choisi la chaine d'éclair, dégâts = 25");
    }
}

try {
    sort(userChoice.toLowerCase)
} catch (e) {
    alert("Sort inconnu")
}