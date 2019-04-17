$(function() {
  // Variables:
  var array = ["Pierre", "Feuille", "Ciseaux"];
  var un = "Ciseaux";
  var dos = "Feuille";
  var tres = "Pierre";

  var counterEgalite = 0;
  var counterVicPc = 0;
  var counterVicPlayer = 0;
  var countergames = 0;
  // Lancement du jeu :
  $("#SelectShifumi").click(function() {
    countergames++;
    var pcChoice = array[Math.floor(Math.random() * array.length)];
    console.log("choix du PC " + pcChoice);
    var playerChoice = $("select").val();
    console.log("choix du Joueur " + playerChoice);
    if (pcChoice == playerChoice) {
      counterEgalite++;
      alert("Choix du Joueur : " + playerChoice + "\n" + "Choix du PC : " + pcChoice + "\nEgalité");

    } else if ((pcChoice == un && playerChoice == dos) || (pcChoice == dos && playerChoice == tres) || (pcChoice == tres && playerChoice == un)) {
      counterVicPc++;
      alert("Choix du Joueur : " + playerChoice + "\n" + "Choix du PC : " + pcChoice + "\nVictoire du PC");

    } else {
      counterVicPlayer++;
      alert("Choix du Joueur : " + playerChoice + "\n" + "Choix du PC : " + pcChoice + "\nVictoire du joueur");
    }
    var vicContPC = counterVicPlayer * 100 / (counterVicPlayer + counterVicPc);
    alert("Nombre de victoire Joueur :" + counterVicPlayer + "\n" + "Nombre de victoire PC :" + counterVicPc + "\n" + "Nombre de Egalité :" + counterEgalite + "\n" + "Pourcentage de victoire contre l'ordinateur :" + vicContPC + "%");
  })
});
