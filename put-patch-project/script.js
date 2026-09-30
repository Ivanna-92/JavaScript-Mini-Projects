document.getElementById("updateButton").addEventListener("click", updateUser);

async function updateUser() {
   
    const user = {
        name:"Sarah",
        email:"sarah@gmail.com"
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    });

    const data = await response.json();

    document.getElementById("result").innerText = data.name + " - " + data.email;
    
}