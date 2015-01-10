var lights = 'on';
//we'll use strings instead of booleans because it's easier to read, but you could do either
console.log(lights);

document.getElementById('lightSwitch').onclick = switchLights;

//when i click #lightswitch (id lightswitch)
// if lights are on
//    turn lights off
// else
//    turn lights on

function switchLights() {
  if (lights === 'on') {
    //the lights are on, turn them off
    lights = 'off';
    document.body.className = 'dark';
  } else {
    //the lights are off, turn them on
    lights = 'on';
    document.body.className = '';
  }
}
//this is where we're putting all of our logic for the pseudocode above
