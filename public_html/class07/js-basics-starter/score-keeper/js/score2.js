var result = 0;

console.log(result);

function displayResult() {
  document.getElementbyID('result').innerHTML = result;
}

// when i click 0
document.getElementById('zero').onclick = zeroResult;
// set result to 0
function zeroResult() {
  result = 0;
  displayResult();
  // document.getElementById('result').innerHTML = result;
  // console.log(result);
}

// when i click +5
document.getElementById('add5').onclick = add5;
// add 5 to result
function add5() {
  result = result + 5;
  displayResult();
  // document.getElementById('result').innerHTML = result;
  // console.log(result);
}

// when i click +10
document.getElementById('add10').onclick = add10;
// add 10 to result
function add10() {
  result = result + 10;
  displayResult();
  // document.getElementById('result').innerHTML = result;
  // console.log(result);
}

// when i click -1
document.getElementById('sub1').onclick = sub1;
// subtract 1 from result
function sub1() {
  result = result - 1;
  //display
  displayResult();
  // document.getElementById('result').innerHTML = result;
  // console.log(result);
}
