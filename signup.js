function vldt() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (fname === "Bruce Wayne" && email === "bruce@gmail.com" && password === "admin123") {
        window.location.assign("login.html");
        alert("Signup Successful");
    } else {
        alert("Invalid information");

    }
}