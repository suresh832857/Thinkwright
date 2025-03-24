document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        this.reset();
    } else {
        alert("Please fill out all fields.");
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Show the popup
    document.getElementById("popupMessage").style.display = "flex";

    // Reset the form after submission
    this.reset();
});

// Function to close the popup
function closePopup() {
    document.getElementById("popupMessage").style.display = "none";
}
// Dark Mode Toggle
const toggleBtn = document.querySelector(".toggle-btn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleBtn.innerHTML = body.classList.contains("dark-mode") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
