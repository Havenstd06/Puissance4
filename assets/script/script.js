var numerojoueur = 1;
var colonnes = 5;
var lignes = 5;
var jeu = true;
var text = "";
var plateau = [];

for (var i = 0; i < lignes; i++) {
	plateau[i] = [];
}
newGame();
function newGame(){
	for (var i = 0; i < lignes; i++) {
		for (var j = 0; j < colonnes; j++) {
			plateau[i][j] = 0 ;
		}
	}
	numerojoueur = 1;
	afficheTextAnnonce("Le jeu commence , c'est au tour du joueur ")+ nomDuJoueur(numerojoueur);
	jeu = true;
	creerTableau();
}
function afficheTextAnnonce(text){
	document.getElementById('textannonce').innerHTML = text;
}
function nomDuJoueur(numerojoueur){
	if (numerojoueur == 1) {
		return "rouge";
	}else{
		return "bleu";
	}
}
function creerTableau(){
	text ="<table>";
	for (var i = 0; i < lignes; i++) {
		text += "<tr>";
		for (var j = 0; j < colonnes; j++) {
			text += '<td onclick="detecteClick('+j+')" id="'+i+'-'+j+'">';
			
			if (plateau[i][j] == 1) {
				text += "<div class='joueur1'></div>";
			}else if (plateau[i][j] == 2){
				text += "<div class='joueur2'></div>";
			}
		text += "</td>";
		}
	text += "</tr>";
	}
text += "</table>";
	document.getElementById('puissance4').innerHTML = text;
}

//2eme partie

function detecteClick(j){
	if (verifPosition(j) && this.jeu ) {
		var ligneEnCours = poseJeton(j); //Numéro de la ligne en cours
		var verifEnd = puissance4(ligneEnCours , j , 0 , 0);
		if (verifEnd) {
			jeu = false;
			afficheTextAnnonce(nomDuJoueur(numerojoueur) + " à gagner la partie");
			console.log("END OF GAME !!");
		}else{
			if (numerojoueur == 1) {
				numerojoueur = 2;
			}else{
				numerojoueur = 1;
			}
			afficheTextAnnonce("C'est au tour du joueur " + nomDuJoueur(numerojoueur));
		}
		}

	}
function verifPosition(j){	//Si la case de la colonne est vide ..
	if (plateau[0][j] == 0) {
		return true;
	}else{					
		return false;
	}
}
//Vérifie et pose le jeton sur la ligne la plus en bas du tableau
function poseJeton(j){
	for (var i = (lignes -1); lignes >= 0; i--) {
		if (plateau[i][j] == 0) {
			plateau[i][j] = numerojoueur;
			refreshTab(i,j,numerojoueur);
			return [i];
		}
	}
}
function refreshTab(x,y,i){
	document.getElementById(x+'-'+y).innerHTML = '<div class="joueur'+i+'"></div>' ;
}
function puissance4(lig,col,l,c){
	if (c == 0 && l == 0) {
		console.log("valeurs:"+lig+" "+col+" / increment "+l+" "+c);
		// horizontal
		var va = 1 + puissance4(lig, col-1, 0, -1) +puissance4(lig, col +1, 0, 1);

		// vertical
		var vb = 1 + puissance4(lig -1, col, -1, 0) +puissance4(lig +1, col, 1, 0);

		// diag gauche
		var vc = 1 + puissance4(lig -1, col-1, -1, -1) + puissance4(lig +1 , col +1 , 1 , 1);

		//diag droite
		var vd = 1 + puissance4(lig -1, col +1, -1, 1) +puissance4(lig +1, col -1, 1, -1);
		console.log(va,vb,vc,vd);
		if (va >= 4 || vb >= 4 || vc >= 4 || vd >= 4) {
			return true;
		}else{
			return false;
		}
	}
if (lig < this.lignes && lig >=0 && col < this.colonnes && col >= 0) {
	console.log("recu valeurs : " + lig +" "+col+" / Incrément "+l+" "+c);
	if (this.plateau[lig][col] == this.numerojoueur) {
		console.log("ok " + numerojoueur);
		return 1 + puissance4(lig+l, col+c, l, c);
	}else{
		console.log("pas ok " + numerojoueur);
		return 0;
	}
}
return 0;
}