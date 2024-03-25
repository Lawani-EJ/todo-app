let userName = document.getElementById("fname");
let userEmail = document.getElementById("email");
let uPassword = document.getElementById("password");

$(document).ready(function () {
    function validateFormOnButtonClick() {
        let formData = {
            name: userName.value,
            email: userEmail.value,
            password: uPassword.value,
        };

        $.ajax({
            type: "POST",
            url: "http://todo.reworkstaging.name.ng/v1/users",
            data: formData,
            success: function (res) {
                alert("Successfully signed up");
                window.location.href = 'login.html';
            },
            error: function (err) {
                alert("Error! Please try again.");
            }
        });

        $.ajax({
            type: "GET",
            url: "http://todo.reworkstaging.name.ng/v1/tags?user_id=",
            success: function (res) {
                alert("Data fetched");
            },
            error: function (err) {
                alert("Error fetching data");
            }
        });
    }

    $('.signup-btn').click(function (event) {
        validateFormOnButtonClick();
        event.preventDefault();
    });
});

