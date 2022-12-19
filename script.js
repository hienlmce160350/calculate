const numbers = document.getElementsByClassName("btn");
const result = document.getElementById("result");

for (let number of numbers) {
    result.innerHTML = "0"
  number.addEventListener("click", () => {
    result.innerHTML += number.value;
  });
}

function clean() {
  result.innerHTML = "0";
}

function undo() {

  let res = result.innerHTML;
  
  if(res.length == 1){
    result.innerHTML = "0";
  } else{
    result.innerHTML = res.substring(0, res.length - 1);
  }
}

function equal() {
  let res = result.innerHTML;
  let output = eval(res);
  result.innerHTML = output;
}
