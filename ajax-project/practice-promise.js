function getProduct() {

    return new Promise((resolve, reject) => {

        const product = {
            name: "Laptop",
            price: 1000
        };

        resolve(product);
    });
}

getProduct()
    .then ((product) => {
        console.log("Product Received:", product);

        return processedProduct(product);
    })
    .then((processedProduct) => {
        console.log("Processed product:", processedProduct);

        return processedProduct.name;

    })
    .then((productName) => {
        console.log("Product name:", ProductName);
    })
    .catch ((error) => {
        console.log("Error:", error)
    });


    function processedProduct(product) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.processed = true;
            reject("Failed to process product");
        }, 1000);
    });
}