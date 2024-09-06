function check() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "Zahoor Ahmed" && password === "Zahoor123") {
        window.location.href = 'index.html';
        return false;
    } else {
        alert("Error: Incorrect Username or Password");
        return false;
    }
}