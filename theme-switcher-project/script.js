// Find the Dark Mode Button
const modeButton = document.getElementById("modeButton");

//Listen for a click on the button
modeButton.addEventListener("click", function(){
    
// Add or remove the dark-mode class    
    document.body.classList.toggle("dark-mode");

// Check if dark mode is currently active 
    if (document.body.classList.contains("dark-mode")) {

        // Change button text to Light Mode
        modeButton.textContent = "Light Mode";
    } else {
        // Change button text to Dark Mode
        modeButton.textContent = "Dark Mode";
    }

});