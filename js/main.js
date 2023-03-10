var  btnChiffre = document.querySelector('select')

// ________________________________________________ bouton chercher
// capturer mon bouton rechercher
var inputButton = document.querySelector('#chercher')
// capturer le texte input
var inputText = document.querySelector('#gifToSearch')
// console.log(inputText)


//  container de gifs
var containerGif = document.querySelector(".containerGif")


// création de fonction à appeler au click :  dedans je mets var -> ma requête et le chiffre demandé
function callMyFunction(query, chiffre) {
    containerGif.innerHTML = "";
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&lang=fr&rating=g&api_key=TAtaDkg7RAvoC1ztFi1VsUUAYKdQeR4d&limit=${chiffre}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
  
    for(i=0; i < chiffre; i++) {
      var url = data.data[i].images.downsized.url;
      containerGif.innerHTML += `<div class="img"><img src="${url}"></div>`;
    }
    })

    .catch(error => {
      console.error("Erreur lors de la récupération des données :", error); 
    });

}

  // ____________________________________________click

  // chercher la value de input au click sur le bouton
  inputButton.addEventListener("click", function(){
    //  rechercher valeur du texte
    var demandeUser = inputText.value;
    //  console.log(demandeUser)

     var valeur = btnChiffre.value;
      //  ici mettre fonction fectchée avec la demande du user et son chiffre
        callMyFunction(demandeUser, valeur);
  });
   
  // change sur select 
  btnChiffre.addEventListener("change", function(){
    var demandeChiffre = btnChiffre.value;
    console.log(demandeChiffre)
    callMyFunction(demandeUser, valeur);
  
  }); 
  // ici le change permet de changer la value du chiffre pour qu'il n'indique pas le un  à chaque fois


