//create the function clearLights, look in the index file for the id stopLight and style it black.
function clearLights() {
    document.getElementById('stopLight').style.backgroundColor = "black";
    document.getElementById('slowLight').style.backgroundColor = "black";
    document.getElementById('goLight').style.backgroundColor = "black";
}

//create the function illuminateRed, first make everything black with the clearLights function, then style red
function illuminateRed() {
    clearLights();
    document.getElementById('stopLight').style.backgroundColor = "red";
}
function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}
function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

//go in the index file and find the id stopButton and when you click on it, implment to the illuminateRed function
document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;
