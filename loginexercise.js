
var submit = document.getElementById("submit");

//Creating objects (users) with un's and pw's and placing them in array

var users = 
[
    {username: "Mathias", password: "Pepke"},
   {username: "Andreas", password: "Lindquist"}, 
   {username: "Frederik", password: "Skafte"}
]

//Click event
submit.onclick = function() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(var i = 0; i < users.length; i++) 
        if (username == users[i].username && password == users[i].password) 
             window.location.href = "Loginexercise2.html";
        
       else (password !== users[i].password)
             document.getElementById('loginResult').textContent = 'Wrong username or password';  
            
    }
    

