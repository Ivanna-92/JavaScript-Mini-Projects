let array = [];

function addElement() {
    const elementInput = document.getElementById("elementInput");
    const element = elementInput.value;

    array.push(element);

    displayArray();


}

function removeLast() {
    if (array.length === 0) {
        alert("There are no elements to remove.");
        return;
    }
    
    array.pop();
    displayArray();
}

function removeFirst() {
    if (array.length === 0) {
        alert("There are no elements to remove.");
        return;
    }


    array.shift();
    displayArray();
}

function addFirst() {
   const elementInput = document.getElementById("elementInput");
   const element = elementInput.value;

   array.unshift(element);

   displayArray();
}

function removeElement() {
    const indexInput = document.getElementById("indexInput");
    const index = indexInput.value;

    if (index === "") {
        alert("Please enter an index.");
        return;
    }

    if (index < 0 || index >= array.length) {
        alert("That index does not exist.");
        return;
    }

    array.splice(index, 1);

    displayArray();
}

function displayArray() {
    const arrayElements = document.getElementById("arrayElements");

    arrayElements.innerHTML = "";

    array.forEach(function (element, index) {
        const item = document.createElement("div");

        item.textContent = "Element " + (index + 1) + ": " + element;

        arrayElements.appendChild(item);

    });

}

function checkEnter(event) {
    if (event.key === "Enter") {
        addElement();
    }
}