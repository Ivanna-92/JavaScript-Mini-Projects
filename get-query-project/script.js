document.getElementById("searchButton").addEventListener("click", searchUser);

async function searchUser() {

    const userId = document.getElementById("userIdInput").value;
    
    const url = "https://jsonplaceholder.typicode.com/users?id=" + userId

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("result").innerText = data[0].name;
    
}