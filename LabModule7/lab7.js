document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username === "admin" && password === "password123") {
            alert("Login successful!");
            window.location.href = "/flower.html";
        } else {
            alert("Invalid username or password.");
        }   
    });
});
