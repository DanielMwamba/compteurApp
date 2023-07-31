const compteur = document.getElementById("compteur");
const bouttonRemove =  document.getElementById("btn-remove");
const bouttonAdd =  document.getElementById("btn-add");
const bouttonReset =  document.getElementById("btn-reset");

let compteurVal = 0;

function addCompteur() {

   compteur.innerHTML = (++compteurVal);  
    
};

function removeComteur() {
    if (compteurVal > 0 ) {
        compteur.innerHTML = (--compteurVal);  
    }
    
   
};

function resetCompteur() {
    compteurVal = 0;
    compteur.innerHTML = compteurVal;
};



bouttonAdd.addEventListener("click",addCompteur);
bouttonRemove.addEventListener("click",removeComteur);
bouttonReset.addEventListener("click", resetCompteur);