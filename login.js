function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "admin123") {
        window.location.assign("index2.html");
        alert("Login Successful");
    } else {
        alert("Invalid information");
    }
}           
