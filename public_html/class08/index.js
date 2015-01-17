// Given I input a value to the cash register

// When I click the submit button

// Then add input value to our total

// And insert new item with input value to our list

// and clear input value


function addValue () {
  console.log('clicked button');
}


//When I click the submit button
document.getElementById('entryBtn').onclick = addValue;
