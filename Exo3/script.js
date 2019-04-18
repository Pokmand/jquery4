$(function() {

    var nom = $("#lastname").val();
    var prenom = $("#firstname").val();
    var email = $("#email").val();
    var telephone = $("#phoneNumber").val();
    var regextext = /[a-z]|-|[A-Z]/;
    var regextel = /^((\+|00)33\s?|0)[67](\s?\d{2}){4}$/;
    var regexmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

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
    $("#email").focusout(function() {
      var email = $("#email").val();
      if (!regexmail.test(email)) {
        swal.fire("EMAIL : Merci de saisir uniquement une adresse email");
      }
    })
    $("#phoneNumber").focusout(function() {
      var telephone = $("#phoneNumber").val();
      if (!regextel.test(telephone)) {
        swal.fire("TELEPHONE : Merci de saisir uniquement un numéro de portable");
      }
    })
    $("#check").click(function() {
    if (regextext.test(nom) && regextext.test(prenom) && regextel.test(telephone) && regexmail.test(email))
      swal.fire("Je m'appelle " + prenom + " " + nom + "\n Mon email est : " + email + " et mon téléphone est : " + telephone + ".");

    else {
      swal.fire("Merci de compléter correctement le formulaire");
    }
  })
})
