$(document).ready(function () {
    $('.form').submit(function (event) {
        event.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();

        var formData = {
            email: email,
            password: password
        };

        $.ajax({
            type: "POST",
            url: "http://todo.reworkstaging.name.ng/v1/users/login",
            data: formData,
            success: function (response) {
                alert("Login successful!");
                // window.location.href = "index2.html";
            },
            error: function (xhr, status, error) {
                alert("Login failed! Please try again.");
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
    });
});

