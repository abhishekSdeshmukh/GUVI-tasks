document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;
  var foods = document.querySelectorAll('input[name="food"]:checked');
  var foodValues = Array.from(foods).map(function(food) {
    return food.value;
  });
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  // Append values to table
  var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  var row = table.insertRow(-1);
  var firstNameCell = row.insertCell(0);
  var lastNameCell = row.insertCell(1);
  var addressCell = row.insertCell(2);
  var pincodeCell = row.insertCell(3);
  var genderCell = row.insertCell(4);
  var foodCell = row.insertCell(5);
  var stateCell = row.insertCell(6);
  var countryCell = row.insertCell(7);
  firstNameCell.textContent = firstName;
  lastNameCell.textContent = lastName;
  addressCell.textContent = address;
  pincodeCell.textContent = pincode;
  genderCell.textContent = gender;
  foodCell.textContent = foodValues.join(", ");
  stateCell.textContent = state;
  countryCell.textContent = country;

  clearForm(); // Clear form fields
});

function clearForm() {
  document.getElementById("myForm").reset();
}