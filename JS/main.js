//Hide or show password based on checkbox
function showPsswd() {
    //get password element
    var x = document.getElementById("psswd");
    //toggle password input to text input or toggle text to password
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

//Show an image of a drink when the drink is selected
function drinkShow(drink){
  //Get img element to change to a drink
  var drinkType = document.getElementById("sodaImage")

  //Change img depending on selected drink
  if (drink == "coke"){
    drinkType.src = "Images/coke.png";
    drinkType.style = "visibility: visible; width: 40%; height:40%; margin-left: 28%; margin-right: 50%;"
  }
  if (drink == "dietCoke"){
    drinkType.src = "Images/dietcoke.png";
    drinkType.style = "visibility: visible; width: 40%; height:40%; margin-left: 28%; margin-right: 50%;"
  }
  if (drink == "sprite"){
    drinkType.src = "Images/sprite.png";
    drinkType.style = "visibility: visible; width: 40%; height:40%; margin-left: 28%; margin-right: 50%;"
  }
  if (drink == "water"){
    drinkType.src = "Images/water.png";
    drinkType.style = "visibility: visible; width: 40%; height:40%; margin-left: 28%; margin-right: 50%;"
  }

  //If no drink is selected, hide the image
  if (drink == "noDrink"){
    drinkType.src = "Images/nonexistent.png";
    drinkType.style = "visibility: hidden; width: 40%; height:40%; margin-left: 28%; margin-right: 50%;"
  }
}

//Show an image of pizza when pizza is selected
function pizzaShow(pizza){
  //Get the img element to change to a pizza
  var pizzaType = document.getElementById("pizzaImage")

  //Change pizza depending on selected item
  if (pizza == "plain"){
    pizzaType.src = "Images/plain.png";
    pizzaType.style = "visibility: visible; height: 95%; width: 95%;";
  }
  if (pizza == "pepperoni"){
    pizzaType.src = "Images/pepperoni.png";
    pizzaType.style = "visibility: visible; height: 95%; width: 95%;";
  }
  if (pizza == "meatball"){
    pizzaType.src = "Images/meatball.png";
    pizzaType.style = "visibility: visible; height: 95%; width: 95%;";
  }
  if (pizza == "sausage"){
    pizzaType.src = "Images/sausage.png";
    pizzaType.style = "visibility: visible; height: 95%; width: 95%;";
  }
  
  //If "No Pizza" is selected, hide the image
  if (pizza == "noPizza"){
    pizzaType.src = "noPizza.png";
    pizzaType.style = "visibility: hidden; height: 95%; width: 95%;";
  }
}