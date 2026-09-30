document.getElementById("patchButton").addEventListener("click", patchUser);

async function patchUser() {

    const user = {
        email:"newemail@gmail.com"
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body:JSON.stringify(user)
    });

    const data = await response.json();

    document.getElementById("result").innerText = data.email;
    
}