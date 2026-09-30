document.getElementById("loadButton").addEventListener("click", loadUser);

async function loadUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/9999");

        if (!response.ok) {
            throw new Error("Request failed"); 
        }
        const data = await response.json();
        document.getElementById("result").innerText = data.name;

    } catch (error) {

        document.getElementById("result").innerText = "Something went wrong.";

    }
    
    
}