// Given I input a value to the cash register

// When I click the submit button

// Then add input value to our total

// And insert new item with input value to our list

// and clear input value

//start at 0
var total = 0;
//log it
console.log(total);

// create function addItemToList with "value" parameter as a holding place
function addItemToList(value) {
  //create variable newEntryElement that holds a div block to print value on its own line
  var newEntryElement = '<div>' + currencyFormat(value) + '</div>';
  var entriesElement = document.getElementById('entries');

  var entriesHTML = entriesElement.innerHTML;

  //<div>10</div><div>20</div> + <div>30</div>
  entriesElement.innerHTML = entriesHTML + newEntryElement;
}

function updateTotal(value) {
  total = total + parseFloat(value);//converts it to a #
  console.log(total);
  document.getElementById('total').innerHTML = currencyFormat(total);
}

function currencyFormat(value) {
  var currency = parseFloat(value);
  //always display to 2 decimals points at the end
  currency = currency.toFixed(2);
  currency = '$' + currency;
  //display it back
  return currency;
}

function addValue () {
  console.log('clicked button');

  // Store #newEntry in entryElement variable
  var entryElement = document.getElementById('newEntry');

  // Get input value from #newEntry
  var entry = entryElement.value;

  //check if our input is a number
  if ( !isNaN(parseFloat(entry)) ) { //! negates/switches things
    //add item
    //var entry = document.getElementById('newEntry');
    addItemToList(entry);
    updateTotal(entry);

    // track if it works in inspect element
    console.log(entry);

    // Clear #newEntry value
    entryElement.value = '';
  }
}

//When I click the submit button
document.getElementById('entryBtn').onclick = addValue;
