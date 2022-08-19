let poids = prompt("Quel est votre poids en kg ?");
let taille = prompt("Quel est votre taille en cm ?");

function imc(){
    taille/=100;
    let imc = poids/(taille**2);
    imc = imc.toFixed(1);
    return imc;
}

alert("Votre imc est "+ imc());