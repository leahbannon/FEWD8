function fahrenheitToCConversion(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
  //value between paren f and return statement: convert number in f only here -- this is part of passing an argument to a function: giving it data to use when it runs -- fahrenheit is a placeholder for the data that gets put into the function
}

//for the function convertToC,
function convertToC() {
  // Get the F value from the input
  // create the variable f, and assign it the varaible of
  var f = document.getElementById('f').value;



  // convert it to C
  //var c = (f - 32) * (5 / 9);
  var c = fahrenheitToCConversion(f);

  //Display to the user
  document.getElementById('c').value = c;

  console.log(c);
}

//When i click on the convert boutton
//go to the index file and find the item id = submit and run the funtion converToC when someone clicks that id submit
document.getElementById('submit').onclick = convertToC;

// Convert it to C (x-32)*(5/9)

// Display it to the user
