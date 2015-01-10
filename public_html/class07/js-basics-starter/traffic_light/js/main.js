function clearLights() {
    document.getElementById('stopLight').style.backgroundColor = "black";
}

function illuminateRed() {
    clearLights();
    document.getElementById('stopLight').style.backgroundColor = "red";
}

document.getElementById('stopButton').onclick = illuminateRed;

//when you click on slow, the stop should go back to black and the slow should become yellow
