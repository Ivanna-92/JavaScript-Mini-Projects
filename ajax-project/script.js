
function loadData() {
   document.getElementById("result").innerText = "Loading..."
   fetch("https://jsonplaceholder.typicode.com/posts/1")
   
   .then(response => {
    console.log("Step 1: We received the response");

    console.log(response.ok)

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    return response.json();

    
   })
   .then(data => {
    console.log("Step 2: We received the data");
    console.log(data);

    document.getElementById("result").innerText = data.title;
   })

   .catch(error => {
      console.log("Caught:", error.message);
   });

   }
   document.getElementById("loadButton").addEventListener("click", loadData);