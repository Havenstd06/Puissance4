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
	document.getElementById('textannonce').innerHTML;
}
function nomDuJoueur(numerojoueur){
	if (numerojoueur == 1) {
		return "rouge";
	}else{
		return "bleu";
	}
}
function creerTableau(){
	text ="<table>".innerHTML;
	for (var i = 0; i < lignes.length; i++) {
		text = "<tr>".innerHTML;
		for (var j = 0; j < colonnes.length; j++) {
			text = "<td id='[i]-[j]' onclick='detectClique([j])'>".innerHTML;
			if (plateau[i][j] == 1) {
				text = "<div class='joueur1'></div>".innerHTLM;
			}else if (plateau[i][j] == 2){
				text = "<div class='joueur2'></div>".innerHTLM;
			}else{

			}
		text = "</td>".innerHTML;

		}
	text = "</tr>".innerHTLM;
	}
text = "</table>";
text = document.getElementById('puissance4');

}
