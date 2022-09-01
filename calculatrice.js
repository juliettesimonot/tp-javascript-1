
//--------variables-----//

let operateur ="";
let nombre1;
let nombre2;
let resultat;


//--------fonctions------------//

function isNumber(nombre){
    while(isNaN(nombre)){
        nombre=0;
        nombre=prompt("Erreur saisie : Pas un nombre \nEntrez un nombre");
    }
    nombre = parseInt(nombre);
    return nombre;
}

function addition(a,b){
    a=parseInt(a);
    b=parseInt(b);
    return a+b;
}

function soustraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return (a/b).toFixed(1);
}


//--------Calculatrice interactive------------//

function calculatrice(){
    nombre1=0;
    nombre2=0;
    resultat=0;
    do{
        operateur = prompt(" Choisir : + | - | * | / ");
    } while(operateur==null || operateur.length==0 || operateur!="+" && operateur!="-" && operateur!="*" && operateur!="/");


    nombre1=prompt("Entrez un premier nombre");
    if(nombre1!=null){
        nombre1=isNumber(nombre1);
    }else{
       return;
    }
    
    
    nombre2 = prompt("Entrez un second nombre");
    if(nombre2!=null){
        nombre2=isNumber(nombre2);
    }else{
        return;
    }
    
    try {
        switch (operateur) {
            case ("+"):
                resultat = addition(nombre1, nombre2);
                break;
            case ("-"):
                resultat = soustraction(nombre1, nombre2);
                break;
            case ("*"):
                resultat = multiplication(nombre1, nombre2);
                break;
            case ("/"):
                resultat = division(nombre1, nombre2);
                break;
        
            default:
                throw new Error("Erreur calcul");
                break;
        }
        alert("Le resultat de "+nombre1+operateur+nombre2+" = "+resultat);
        
    } catch (error) {
        alert(error);
    }
}


calculatrice();


    let recommencer;
    recommencer = confirm("Recommencer?");
    if(recommencer==true){
        calculatrice();
    }else{
        alert("Au revoir");
    }








