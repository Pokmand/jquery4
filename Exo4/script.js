$(function() {

  var nom = $("#lastname").val();
  var prenom = $("#firstname").val();
  var dateDeNaissance = $("#birthdate").val();
  var lieuDeNaissance = $("#birthplace").val();
  var emploi = $("#job").val();
  var societe = $("#company").val();

  var regextext = /[a-z]|-|[A-Z]/;
  var regextel = /^((\+|00)33\s?|0)[67](\s?\d{2}){4}$/;
  // var regexdate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  var regextextNumber = /[a-z]|-|[A-Z]|-|[0-9]/;

  $("#lastname").focusout(function() {
    var nom = $("#lastname").val();
    if (!regextext.test(nom)) {
      swal.fire("NOM : Merci d'utiliser uniquement des lettres et des tirets");
    }
  })
  $("#firstname").focusout(function() {
    var prenom = $("#firstname").val();
    if (!regextext.test(prenom)) {
      swal.fire(" PRENOM : Merci d'utiliser uniquement des lettres et des tirets");
    }
  })
  $("#birthplace").focusout(function() {
    var lieuDeNaissance = $("#birthplace").val();
    if (!regextext.test(lieuDeNaissance)) {
      swal.fire("Lieu de Naissance : Merci de saisir uniquement des lettres et des tirets");
    }
  })
  $("#job").focusout(function() {
    var emploi = $("#job").val();
    if (!regextextNumber.test(emploi)) {
      swal.fire("Emploi: Merci d'utiliser uniquement des lettres, des tirets et des chiffres");
    }
  })
  $("#company").focusout(function() {
    var societe = $("#company").val();
    if (!regextextNumber.test(societe)) {
      swal.fire("Société : Merci d'utiliser uniquement des lettres, des tirets et des chiffres");
    }
  })
  $("#check").click(function() {
    var nom = $("#lastname").val();
    var prenom = $("#firstname").val();
    var lieuDeNaissance = $("#birthplace").val();
    var emploi = $("#job").val();
    var societe = $("#company").val();
    var dateDeNaissance = $("#birthdate").val().split('-').reverse().join('-').replace('-', '/').replace('-', '/');
    if (regextext.test(nom) && regextext.test(prenom)  && regextextNumber.test(birthplace) && regextextNumber.test(emploi) && regextextNumber.test(societe)) {
      swal.fire("Je suis " + prenom + " " + nom + "\n né(e) le : " + dateDeNaissance + " et je travaille chez " + societe + " en tant que " + emploi + ".");
    } else if (dateDeNaissance == "") {
      swal.fire("Merc de choisir une date")
    } else {
      swal.fire("Merci de compléter correctement le formulaire");
    }
  })
})
