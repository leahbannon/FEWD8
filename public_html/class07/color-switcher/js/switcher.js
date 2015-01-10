document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;


function switchGray() {
  document.getElementsByTagName('body')[0].className = 'one';
}

function switchWhite() {
  document.getElementsByTagName('body')[0].className = 'two';
}

function switchBlue() {
  document.getElementsByTagName('body')[0].className = 'three';
}

function switchYellow() {
  document.getElementsByTagName('body')[0].className = 'four';
}
