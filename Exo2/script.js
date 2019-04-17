$(function() {
  $("#validate").click(function() {
    var varhtml = $("#htmlgrade").val();
    var varcss = $("#cssgrade").val();
    var varbootstrap = $("#bootstrapgrade").val();
    var varjavascript = $("#javascriptgrade").val();
    var varjquery = $("#jquerygrade").val();
    console.log(varhtml);
    console.log(varcss);
    console.log(varbootstrap);
    console.log(varjavascript);
    console.log(varjquery);
    var moyenne = (Number(varhtml) + Number(varcss) + Number(varbootstrap) + Number(varjavascript) + Number(varjquery)) / 5;
    console.log(moyenne);
    if (moyenne < 10) {
      Swal.fire("Votre moyenne est de " + moyenne + "." + "\n" + " Votre appréciation : En dessous de la moyenne");
    } else if (moyenne >= 10 && moyenne < 13) {
      Swal.fire("Votre moyenne est de " + moyenne + "." + "\n" + " Votre appréciation : Moyen");
    } else if (moyenne >= 13 && moyenne < 16) {
      Swal.fire("Votre moyenne est de " + moyenne + "." + "\n" + " Votre appréciation : Bien");
    } else if (moyenne >= 16 && moyenne < 20) {
      Swal.fire("Votre moyenne est de " + moyenne + "." + "\n" + " Votre appréciation : Très Bien");
    } else {
      Swal.fire("Votre moyenne est de " + moyenne + "." + "\n" + " Votre appréciation : Excellent");
    }
  });
})
// Demander à l'aide d'un formulaire les 5 dernières notes d'un élève.
// Calculer sa moyenne et déterminer son appréciation.
//
//     Si la moyenne de l'élève est supérieure ou égale à 0 et inférieure à 10, il aura comme appréciation : "En dessous de la moyenne".
//     Si la moyenne de l'élève est supérieure ou égale à 10 et inférieure à 13, il aura comme appréciation : "Moyen".
//     Si la moyenne de l'élève est supérieure ou égale à 13 et inférieure à 16, il aura comme appréciation : "Bien".
//     Si la moyenne de l'élève est supérieure ou égale à 16 et inférieure à 20, il aura comme appréciation : "Très bien".
//     Si la moyenne de l'élève est égale à 20, il aura comme appréciation : "Excellent".
//
// Afficher la moyenne et l'appréciation de l'élève.
