const listener = document.querySelectorAll(".pad-item");
const result = document.getElementById("resultat");

console.log(result.classList[1]);
let array = [];
for (let index = 0; index < listener.length; index++) {
  listener[index].addEventListener("click", function () {
    buttonAnimation(this.classList[2]);
    let getValeur = this.textContent;
    if(getValeur != '=') {
      array.push(getValeur);
    } else {
      calculator();
      array = [];
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
          array[index + 2] = parseInt(array[index]) + parseInt(array[index + 2]);
          break;
        case '-':
          array[index + 2] =  parseInt(array[index]) - parseInt(array[index + 2]);
          break;
        case 'x':
          array[index + 2] = parseInt(array[index + 2]) * parseInt(array[index]);
          break;
        case '/':
          array[index + 2] = parseInt(array[index + 2]) / parseInt(array[index]);
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