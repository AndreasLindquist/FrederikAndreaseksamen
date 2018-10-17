
class User {
// The constructor for our class, which will allow us to create new objects of our class
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
}


//Creating objects of the class User, with usernames and passwords and placing them in array
var userObj = new User("Frederik", "dum12345");
var userObj2 = new User("Andreas", "dum1");

var users = [userObj, userObj2];


//Click event for the login button
var loginButton = document.getElementById("loginButton");

loginButton.onclick = function() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(var i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) 
             window.location.href = "mainEventPage.html";
        
        else (password !== users[i].password)
             document.getElementById('loginResult').textContent = 'Wrong username or password';  
    }
}

//Click event for the sign-up function
var signUpButton = document.getElementById("signUpButton");

    signUpButton.onclick = function() { 
    var username = document.getElementById("newUsername").value;
    var password = document.getElementById("newPassword").value;
 
    if (username.length < 6 || password.length < 6){
            document.getElementById("signupResult").textContent = "Your username and password must be at least 6 characters";
        
    } else {
    var newUser = new User(username, password);
    users.push(newUser);
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';

    document.getElementById("signupResult").textContent = "Your user has been created and you can now login";
    }
}

  //  var users = localStorage.getItem('users');

    //users.add(new User(regUser, regPass));

    //localStorage.setItem('users', users);

    
   
    

