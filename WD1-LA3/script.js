const buttons = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
let total = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.parentElement;
        const name = card.querySelector("h3").textContent;
        const priceText = card.querySelector(".price").textContent;
        const price = parseFloat(priceText.replace("₱", "").replace(",", ""));

        // Create list item
        const li = document.createElement("li");
        li.textContent = `${name} - ₱${price.toFixed(2)}`;
        cartItems.appendChild(li);

        // Update total
        total += price;
        totalDisplay.textContent = `Total: ₱${total.toFixed(2)}`;
    });
});