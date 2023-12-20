function UserCredentials(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
}

var users = [];

function registerUser() {
 
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
        alert("Please fill your form.");
        return;
    }

    var User1 = new UserCredentials(firstName, lastName, email, password);
    users.push(User1);
    alert("Successfully registered.");
    document.getElementById("registrationForm").reset();
}

