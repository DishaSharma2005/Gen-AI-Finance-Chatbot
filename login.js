document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }
    
    // Mock authentication logic (Replace with real authentication later)
    if (username === "testuser" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect after successful login
    } else {
        alert("Invalid username or password.");
    }
});
