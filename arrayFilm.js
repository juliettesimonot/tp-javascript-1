let films = ["Star Wars - La Menace fantôme (1999)", " Star Wars -  L'Attaque des clones (2002)", "Star Wars -  La Revanche des Sith (2005)", "La Guerre des étoiles (1977)", " L'Empire contre-attaque (1980)"]

console.log("Entrée 4 : " + films[3]+ "\nEntrée 2 :"+films[1]+"\n");

for (let i = 0; i < films.length; i++) {
    console.log(films[i]+"\n");  
}

console.table(films);