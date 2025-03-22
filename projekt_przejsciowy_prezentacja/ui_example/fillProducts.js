const fillProducts = () =>{
    const container = document.querySelector('.main-products-container')
    for(let i = 0; i < 14; i++){
        createProductDiv(container);
    }

}

const createProductDiv = (parent) =>{
    const div = document.createElement('div');
    div.classList.add('product-overview-div');


    div.innerHTML = `
        <div>
        <input type = 'checkbox' id = 'input-btn'>
        <span class = 'overview-id'>${generateID()}</span>
        </div>
        <span class = 'overview-price'>${generatePrice()}</span>
        <span class = 'overview-stock'>${getRandomNumber()}</span>
        <span class = 'overview-update'>${getRandomDate()}</span>
        <span class = 'overview-details'>Details</span>
        `
        parent.appendChild(div);
    
}

const generateID = () => {
    return Math.floor(Math.random() * (1319850 - 1000000 + 1)) + 1000000;
};

const generatePrice = () =>{
    const prices = [9.99, 13.99, 15.99, 24.99, 39.99, 49.99, 74.99, 99.99, 114.99, 128.99, 199.99, 249.99, 399.99];
    return prices[Math.floor(Math.random() * prices.length)];
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 15) + 1;
};

const getRandomDate = () => {
    const start = new Date("2025-01-01").getTime();
    const end = new Date().getTime();
    const randomTime = Math.floor(Math.random() * (end - start + 1)) + start;
    const date = new Date(randomTime);

    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options).replace(",", "");
};


fillProducts();