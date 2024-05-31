export function writeExcitedMessage() {
    document.write("Excited to see you!");
}

// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission
// }

export function handleLoginForm() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Basic client-side validation
        if (username.trim() === "" || password.trim() === "") {
            document.getElementById("message").innerHTML = "Please enter both username and password.";
            return;
        }

        // Dummy authentication (replace with actual authentication logic)
        if (username === "admin" && password === "admin123") {
            document.getElementById("message").innerHTML = "Login successful!";
            // Redirect to dashboard or any other page
            // window.location.href = "dashboard.html";
        } else {
            document.getElementById("message").innerHTML = "Invalid username or password.";
        }
    });
}