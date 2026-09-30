const form = document.querySelector(".userForm");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {

    console.log("Form submitted");

    event.preventDefault();

    const name = document.getElementById("nameInput").value;

    console.log(name);

    const email = document.getElementById("emailInput").value;

    console.log(email);

    const user = {
        name: name,
        email: email
    };
    console.log(user);

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",

        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify(user)

    });
    console.log(response);

    const data = await response.json();
    console.log(data);

    document.getElementById("result").innerText = "Created user with ID: " + data.id;
    
}