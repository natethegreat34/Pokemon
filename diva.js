var remove = false;
var remove1 = false;
var remove2 = false;
var remove3 = false;
var remove4 = false;
var remove5 = false;
var remove6 = false;
function fun1(){
  if (remove){
    var image_z = document.getElementById('image_A');
    image_z.parentNode.removeChild(image_z);
    remove = false
  }
  var x = document.createElement("IMG");
  var t = document.getElementById("pokemon1").value;
  var i = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + t + ".png";
  x.setAttribute("src",i );
  x.setAttribute("class","pif" );
  x.setAttribute("alt", "Enter a valid name");
  x.setAttribute("id","image_A" );
  document.body.appendChild(x);
  remove = true;
}
function fun2(num){
  if (remove){
    var image_z = document.getElementById('image_A');
    image_z.parentNode.removeChild(image_z);
    remove = false
  }
  var x = document.createElement("IMG");
  var i = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num + ".png";
  x.setAttribute("src",i );
  x.setAttribute("class","pif" );
  x.setAttribute("alt", "Enter a valid name");
  x.setAttribute("id","image_A" );
  document.body.appendChild(x);
  remove = true;
}



function fun3(){
  if (remove1){
    var image_1 = document.getElementById('image_1');
    image_1.parentNode.removeChild(image_1);
    remove1 = false
  }
  var x = document.createElement("IMG");
  var t = document.getElementById("pokemonone").value;
  var i = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + t + ".png";
  x.setAttribute("src",i );
  x.setAttribute("class","life" );
  x.setAttribute("alt", "Enter a valid name");
  x.setAttribute("id","image_1" );
  document.body.appendChild(x);
  remove1 = true;
}

function fun4(){
  if (remove2){
    var image_2 = document.getElementById('image_2');
    image_2.parentNode.removeChild(image_2);
    remove2 = false
  }
  var x = document.createElement("IMG");
  var t = document.getElementById("pokemontwo").value;
  var i = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + t + ".png";
  x.setAttribute("src",i );
  x.setAttribute("class","life2" );
  x.setAttribute("alt", "Enter a valid name");
  x.setAttribute("id","image_2" );
  document.body.appendChild(x);
  remove2 = true;
}
function fun5(){
  if (remove3){
    var image_z = document.getElementById('image_E');
    image_z.parentNode.removeChild(image_z);
    remove3 = false
  }
  var x = document.createElement("IMG");
  var t = document.getElementById("pokemonthree").value;
  var i = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + t + ".png";
  x.setAttribute("src",i );
  x.setAttribute("class","life3" );
  x.setAttribute("alt", "Enter a valid name");
  x.setAttribute("id","image_E" );
  document.body.appendChild(x);
  remove3 = true;
}
function fun6(){
  if (remove4){
    var image_z = document.getElementById('image_F');
    image_z.parentNode.removeChild(image_z);
    remove4 = false
  }
  var x = document.createElement("IMG");
  var t = document.getElementById("pokemonfour").value;
  var i = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + t + ".png";
  x.setAttribute("src",i );
  x.setAttribute("class","life4" );
  x.setAttribute("alt", "Enter a valid name");
  x.setAttribute("id","image_F" );
  document.body.appendChild(x);
  remove4 = true;
}
function fun7(){
  if (remove5){
    var image_z = document.getElementById('image_G');
    image_z.parentNode.removeChild(image_z);
    remove5 = false
  }
  var x = document.createElement("IMG");
  var t = document.getElementById("pokemonfive").value;
  var i = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + t + ".png";
  x.setAttribute("src",i );
  x.setAttribute("class","life5" );
  x.setAttribute("alt", "Enter a valid name");
  x.setAttribute("id","image_G" );
  document.body.appendChild(x);
  remove5 = true;
}
function fun8(){
  if (remove6){
    var image_z = document.getElementById('image_H');
    image_z.parentNode.removeChild(image_z);
    remove6 = false
  }
  var x = document.createElement("IMG");
  var t = document.getElementById("pokemonsix").value;
  var i = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + t + ".png";
  x.setAttribute("src",i );
  x.setAttribute("class","life6" );
  x.setAttribute("alt", "Enter a valid name");
  x.setAttribute("id","image_H" );
  document.body.appendChild(x);
  remove6 = true;
}
