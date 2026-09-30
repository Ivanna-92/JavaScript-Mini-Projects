document.getElementById("getButton").addEventListener("click", getUser);
document.getElementById("postButton").addEventListener("click", createUser);

async function getUser() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);

    document.getElementById("result").innerText = data.name;    
}

async function createUser() {

    const name = document.getElementById("nameInput").value;
    console.log(name);

    const email = document.getElementById("emailInput").value;
    console.log(email);

    const user = {
        name:name,
        email:"email"
    };
    console.log(user);
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    });

    console.log(response);

    const data = await response.json();

    document.getElementById("result").innerText = "Created user with ID:" + data.id;
    
}