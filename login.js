class User {

    // The constructor for our class, which will allow us to create new objects of our class
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
}

//Login function
var submit = document.getElementById("submitExistingUser");

//Creating objects (users) with usernames and passwords and placing them in array
var users = 
[
    {username: "Andreas@email.com", password: "Lindquist"}, 
    {username: "Frederik@email.com", password: "Skafte"}  
]

//Click event
submit.onclick = function() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(var i = 0; i < users.length; i++) 
    if (username == users[i].username && password == users[i].password) 
             window.location.href = "frontpageExam.html";
        
    else (password !== users[i].password)
             document.getElementById('loginResult').textContent = 'Wrong username or password';  
            
}


//Sign-up function
var submitNewUser = document.getElementById("signupSubmit");


//Click event sign-up 
    submitNewUser.onclick = function() { 
    var username = document.getElementById("newUsername").value;
    var password = document.getElementById("newPassword").value;
    
    if (username.length < 5 || password.length < 6){
            document.getElementById("signupResult").textContent = "Your username and password must be at least 6 characters";
        
    } else {
    var newUser = {username, password};
    users.push(newUser);
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';

    document.getElementById("signupResult").textContent = "Your user have been created and you can now login";
    }
}






  //  var users = localStorage.getItem('users');

    //users.add(new User(regUser, regPass));

    //localStorage.setItem('users', users);

    
    