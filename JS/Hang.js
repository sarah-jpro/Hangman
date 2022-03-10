

var tableau_mot = ["PAIN","KAYAK","AMICAL","SOLIDE","CODAGE","FAMILLE","SCEAU","QUESTION","AMBIANCE","CHOCOLAT","CHAPEAU","RITUEL","SOMMEIL","BATEAU","CERCLE","NATURE","ENCENS","FONTAINE","ADULTE","ENTRE","AMBICIEUX","ANIMAL","MANTEAU"]; 
//mots disponibles dans le jeu.

var nb = 0;
nb = aleatoire_mot();


var chaine = tableau_mot[nb];
var long = chaine.length;

function aleatoire_mot(){
    var alea = Math.floor(Math.random()*tableau_mot.length); // mot aléatoire
    return alea;
}

afficher_cases();

function afficher_cases() { //Nombre de cases par rapport mot
    
    
    for(var i = 1; i <= long;i++) {
        document.getElementById("mot_devine").innerHTML += '<div id="champ_devine'+i+'" class="champ_devine"><input type="text" id="devine'+i+'" class="champclassdev" disabled></div>';
    }
    for(var j = 1; j <= long;j++) {
        document.getElementById('mot_cache').innerHTML += '<div id="champ_cache'+i+'" class="champ_cache"><input type="text" id="cache'+i+'" class="champclass" value="'+chaine[j-1]+'"></div>';
    }   
}
var erreur = 0;
var faux = false;
var nbgagner = 0;

function propose(a) {
    
    var lettre = 1;
    
    document.getElementById("lettre"+a).disabled = "true";
    document.getElementById("lettre"+a).style.backgroundColor = "black";
    document.getElementById("lettre"+a).style.color = "grey";
    document.getElementById("inputtext_cache").value = a; 
    
    
    
    for(var k = 1; k <= long ; k++) { // l'affichage des lettre dans les cases
        
        
        if (a == chaine[k-1]) {
            document.getElementById("devine"+k).value = a;
            nbgagner++;
            document.getElementById("footer").innerHTML = "<span>Good Job !</span>"
        }
    }
    
    for(var l = 1; l <= long ; l++){ // FOR pour la verif des fautes.
        
        if (a != chaine[l-1]) {
            faux = true;
            
        }
        else if (a == chaine[l-1]) {
            faux = false;break;
        }
    }
    
    if (faux) { //affichage du pendu-fautes. 
        document.getElementById("Good Luck").style.display = "none";
        erreur++;
        document.getElementById("footer").innerHTML = "<span>Oups!</span>"
        
        
        document.getElementById("pendu"+erreur).style.display = "block";
        var comptage = erreur -1;
        document.getElementById("pendu"+comptage).style.display = "none";  
    }
    
    var maClass = document.getElementsByClassName("bouton_clavier"); // Changement des couleurs des touches quand game over
    
    if (erreur >= 6 ){
        document.getElementById("footer").innerHTML = "<span>You are DEAD !</span>"
        
        for (var i = 0, count = maClass.length; i < count; i++) {
            var element = maClass[i];
            
            element.style.backgroundColor = "#434343";
            element.style.color = "#CACACA";
            element.disabled = "true";
            
            
        }
        
        for (var j = 1; j <= long;j++) {
         document.getElementById('champ_devine'+j ).style.display = "none"
         document.getElementById('mot_devine').innerHTML += '<div id="champ_devine'+i+'" class="champ_devine"><input type="text" id="devine'+i+'" class="champclassdev" value="'+chaine[j-1]+'"></div>';
        }
        setTimeout('fin()',2000);
    }
    
    if (nbgagner == long) {
        document.getElementById("footer").innerHTML = "<span>Well...well you're alive !</span>";
        setTimeout("fin()",2000);
    } 
    
}
function fin(){
    document.getElementById("footer").innerHTML += "<input type=button' value='Try Again?' id='bouton_recommencer' onclick='reload()'>";
}
function reload(){
     window.location.reload(true);
 }



