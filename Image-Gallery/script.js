function addImage () {
    const imageUrl = document.getElementById("imageUrl").value;

    if (imageUrl) {
        const gallery = document.getElementById("gallery");
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const image = document.createElement("img");
        image.src = imageUrl;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");

        removeButton.onclick = () => {
            gallery.removeChild(galleryItem);
        };

        galleryItem.appendChild(image);
        galleryItem.appendChild(removeButton);
        gallery.appendChild(galleryItem);

        document.getElementById("imageUrl").value = "";
    }
}
document.getElementById("addImageButton").addEventListener("click", addImage);