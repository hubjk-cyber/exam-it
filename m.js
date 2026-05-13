const data = {
    pizza: [
        {name:"Pineapple Pizza", price:10, img:"p.jfif"},
        {name:"Cheese Pizza", price:8, img:"p1.jpg"},
        {name:"Pepperoni Pizza", price:9, img:"p2.jfif"},
        {name:"Veggie Pizza", price:7, img:"p3.jfif"},
        {name:"BBQ Pizza", price:11, img:"p4.jfif"},
        {name:"Mushroom Pizza", price:9, img:"p5.jfif"}
    ],
    drinks: [
        {name:"Cola", price:2, img:"j.jfif"},
        {name:"Juice", price:3, img:"j1.jfif"},
        {name:"Water", price:1, img:"j2.jfif"},
        {name:"Milkshake", price:4, img:"j3.jfif"},
        {name:"Tea", price:2, img:"j4.jfif"},
        {name:"Coffee", price:3, img:"j5.jfif"}
    ]
};

let total = 0;

function loadCategory(category) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    data[category].forEach(item => {
        container.innerHTML += `
        <div class="card">
            <img src="${item.img}">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
        </div>`;
    });
}

function addToCart(name, price) {
    const li = document.createElement("li");
    li.textContent = name;
    document.getElementById("cartItems").appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function checkout() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";

    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("total").textContent = "0";
    total = 0;
}