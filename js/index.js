const listener = document.querySelectorAll(".pad-item");
const result = document.getElementById('.results');

console.log(result);
let array = [];

for (let index = 0; index < listener.length; index++) {
  
  listener[index].addEventListener("click", function () {
    if(this.textContent != '=') {
      array.push(this.textContent);
    } else {
      saliou();
    }
  });
  
}


function saliou() {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
    if (index + 1 < array.length && (index + 1)%2 != 0) {
      switch (array[index + 1]) {
        case '+':
          array[index + 2] += array[index]
          break;
        case '-':
          array[index + 2] -= array[index]
          break;
        case '*':
          array[index + 2] *= array[index]
          break;
              
        default:
          break;
      }
    }
  }
  results.innerHTML = array[array.length - 1];
  
}
