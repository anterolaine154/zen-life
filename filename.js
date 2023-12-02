/**

 * filename.js - Complex Code Example

 * This code showcases the implementation of a complex and sophisticated application using JavaScript.

 * The code example below demonstrates a fictional e-commerce website with various functionalities.

 */

 

// Constants

const TAX_RATE = 0.08;

const SHIPPING_COST = 5.99;

 

// Data Structures

let catalog = [

  {

    id: 1,

    name: 'Product 1',

    price: 9.99,

    quantity: 10,

  },

  {

    id: 2,

    name: 'Product 2',

    price: 19.99,

    quantity: 5,

  },

  {

    id: 3,

    name: 'Product 3',

    price: 14.99,

    quantity: 8,

  },

];

 

let cart = [

  {

    id: 1,

    quantity: 2,

  },

  {

    id: 3,

    quantity: 1,

  },

];

 

// Functions

function calculateSubtotal() {

  let subtotal = 0;

  for (let item of cart) {

    let product = catalog.find(p => p.id === item.id);

    if (product && product.quantity >= item.quantity) {

      subtotal += product.price * item.quantity;

    }

  }

  return subtotal;

}

 

function calculateTax(subtotal) {

  return subtotal * TAX_RATE;

}

 

function calculateShippingCost(subtotal) {

  return subtotal > 50 ? 0 : SHIPPING_COST;

}

 

function calculateTotal(subtotal, tax, shippingCost) {

  return subtotal + tax + shippingCost;

}

 

function updateCatalog(productId, quantity) {

  let product = catalog.find(p => p.id === productId);

  if (product) {

    product.quantity -= quantity;

  }

}

 

// Main Execution

let subtotal = calculateSubtotal();

let tax = calculateTax(subtotal);

let shippingCost = calculateShippingCost(subtotal);

let total = calculateTotal(subtotal, tax, shippingCost);

 

console.log('--------------');

console.log('Your Cart:');

console.log('--------------');

for (let item of cart) {

  let product = catalog.find(p => p.id === item.id);

  if (product && product.quantity >= item.quantity) {

    console.log(`${item.quantity}x ${product.name} - $${product.price.toFixed(2)} each`);

  }

}

console.log('--------------');

console.log('Summary:');

console.log('--------------');

console.log(`Subtotal: $${subtotal.toFixed(2)}`);

console.log(`Tax: $${tax.toFixed(2)}`);

console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`);

console.log(`Total: $${total.toFixed(2)}`);

console.log('--------------');

console.log('Thank you for shopping!');

console.log('--------------');

 

// Update catalog and quantities

for (let item of cart) {

  let product = catalog.find(p => p.id === item.id);

  if (product && product.quantity >= item.quantity) {

    updateCatalog(product.id, item.quantity);

  }

}

 

// Output updated catalog

console.log('--------------');

console.log('Updated Catalog:');

console.log('--------------');

for (let product of catalog) {

  console.log(`${product.name} - ${product.quantity} in stock`);

}

console.log('--------------');

console.log('End of program.');

console.log('--------------');

 

// ... Additional code and functionalities follow