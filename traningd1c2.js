console.log("MENU\n1. Pizza - 200\n2. Burger - 300\n3. Chicken Biryani - 250\n4. Apple Juice - 100\n5. Idly - 80");

let s = prompt("Enter a choice (1-5):");
let q = prompt("Enter your quantity:");
let quantity = parseInt(q); // Convert quantity input to a number
let price = 0;

switch (s) {
    case '1':
        price = 200 * quantity;
        break;
    case '2':
        price = 300 * quantity;
        break;
    case '3':
        price = 250 * quantity;
        break;
    case '4':
        price = 100 * quantity;
        break;
    case '5':
        price = 80 * quantity; // Corrected price for Idly
        break;
    default:
        console.log("Invalid choice");
        return; // Exit the function if the choice is invalid
}

let dis = 0; // Initialize discount variable
if (price > 500) {
    dis = price * 10 / 100; // Calculate discount if applicable
    price -= dis; // Apply discount
}

console.log("The total price is: " + price);
if (dis > 0) {
    console.log("The discount is: " + dis);
}
