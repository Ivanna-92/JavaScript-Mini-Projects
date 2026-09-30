document.getElementById("loadButton").addEventListener("click", loadUser)

async function loadUser() {

    try {
    console.log("Starting...");

    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
        throw new Error("Request failed");
    }

    console.log ("Response received!");

    const data = await response.json();

    console.log("Data ready!");

    document.getElementById("result").innerText = data.name;
    } catch (error) {

        console.log("Something went wrong:", error);

        document.getElementById("result").innerText = "Something went wrong.";
    }
}