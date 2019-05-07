var numerojoueur = 1;
var colonnes = 5;
var lignes = 5;
var jeu = true;
var text = "";
var plateau = [];

for (var i = 0; i < lignes.length; i++) {
	plateau[i];
}
function newGame(){
	for (var i = 0; i < lignes.length; i++) {
		for (var j = 0; i < colonnes.length; j++) {
			plateau[i][j] = 0 ;
		}
	}
	numerojoueur = 1;
	afficheTextAnnonce("Le jeu commence , c'est au tour du joueur")+nomDuJoueur(joueur);
	jeu = true;
	creerTableau();
}
function afficheTextAnnonce(text){
	document.GetElementById('textannonce').innerHTML;
}

