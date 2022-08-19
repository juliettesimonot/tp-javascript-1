let heure = prompt("Quelle heure est-il?");
heure = parseInt(heure);

function dayTime(){
    if(heure>0 && heure<=24){
        if(heure<12){
            alert("C'est le matin");
        }else if(heure<18){
            alert("C'est l'après-midi");
        }else{
            alert("C'est le soir");
        }
    }else{
        alert("heure incorrecte");
    }
}

dayTime();

