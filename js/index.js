const listener = document.querySelectorAll(".pad-item");
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
    
    
  }
  
}
