let total = 0;

function addToOrder(itemName, price) {
    total += price;

    const orderList = document.getElementById("orderList");
    const li = document.createElement("li");
    li.innerText = itemName + " - ₹" + price;
    orderList.appendChild(li);

    document.getElementById("totalAmount").innerText = total;
}

function clearOrder() {
    total = 0;
    document.getElementById("orderList").innerHTML = "";
    document.getElementById("totalAmount").innerText = 0;
}
