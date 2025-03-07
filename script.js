function showLogin() {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value;
  let gender = document.querySelector('input[name="gender"]:checked');

  if (!name || age === "" || !gender) {
      alert("Please fill all fields.");
      return;
  }

  let loginInput = prompt("Enter User Type and Password (e.g., Admin,Admin123):");
  if (!loginInput) return;

  let loginDetails = loginInput.split(",");
  if (loginDetails.length !== 2) {
      alert("Invalid format! Use: UserType,Password");
      return;
  }

  let userType = loginDetails[0].trim();
  let password = loginDetails[1].trim();

  userType = userType.charAt(0).toUpperCase() + userType.slice(1).toLowerCase();

  let users = {
      "Admin": "Admin123",
      "Student": "Student123",
      "Guest": "Guest123"
  };

  if (users[userType] && users[userType] === password) {
      alert( 
        `Welcome ${userType}!\nHere are your details:\nName: ${name}\nAge: ${age}\nGender: ${gender.value} `
      );
  } else {
      alert("User not found! Incorrect login details.");
  }
}