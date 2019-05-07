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
		for (var j = 0; i < colonnes; j++) {
			plateau[i][j] = 0 ;
		}
	}
	numerojoueur = 1;
	afficheTextAnnonce("Le jeu commence , c'est au tour du joueur ")+ nomDuJoueur(joueur);
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
