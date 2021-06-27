const listener = document.querySelectorAll(".pad-item");
const result = document.getElementById("resultat");

let array = [];
let temp = "";

for (let index = 0; index < listener.length; index++) {
  listener[index].addEventListener("click", function () {
    buttonAnimation(this.classList[2]);
    let getValeur = this.textContent;
    if (getValeur == "+" || getValeur == "-" || getValeur == "x" || getValeur == "/" || getValeur == "=") {
      console.log("valeur: ", temp);
      array.push(temp);
      getValeur === "=" ? (calculator(), (array = [])) : array.push(getValeur); 
      temp = "";
    } else if (getValeur == "Reset") {
        array = [];
        temp = "";
        result.innerHTML = 0;
    } else if (getValeur == "DEL") {
        temp == "" ? array.pop : temp = "";
    } else {
      temp += getValeur;
      result.innerHTML = temp;
      console.log("valeur 1: ", temp);
    }
  });
  
}

function calculator() {
  let resultat = 0;
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
    if (index + 1 < array.length && (index + 1)%2 != 0) {
      switch (array[index + 1]) {
        case '+':
          array[index + 2] = parseFloat(array[index]) + parseFloat(array[index + 2]);
          break;
        case '-':
          array[index + 2] = parseFloat(array[index]) - parseFloat(array[index + 2]);
          break;
        case 'x':
          array[index + 2] = parseFloat(array[index]) * parseFloat(array[index + 2]);
          break;
        case '/':
          array[index + 2] = parseFloat(array[index]) / parseFloat(array[index + 2]);
          break;      
        default:
          console.error('404');
          break;
      }
    }
  }
  result.innerHTML = array[array.length -1];
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
      activeButton.classList.remove("pressed");
  }, 100);

}