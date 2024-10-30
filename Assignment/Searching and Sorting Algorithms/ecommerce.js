// ---------------------------------------------------------------------
// 4. Ecommerce
// [INSTRUCTIONS]
// Lengkapi kode berikut sehingga dapat memenuhi testcase dibawah
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity; // Perbaikan: Menggunakan 'quantity' untuk konsistensi
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Class for Shopping Cart
class ShoppingCart {
  constructor() {
    this.products = [];
    this.cart = [];
    this.total = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.cart.push({
      name: product.name,
      qty: product.quantity,
      price: product.getTotalPrice(),
    });
    this.total += product.getTotalPrice(); // Update total saat produk ditambahkan
  }

  getCartDetail() {
    return this.cart;
  }

  getTotal() {
    return this.total;
  }
}

// Class for Checkout
class Checkout {
  constructor(money, totalPay) {
    this.money = money;
    this.totalPay = totalPay;
    this.paymentResult = "";
  }

  transaction() {
    if (this.money < this.totalPay) {
      this.paymentResult = "Sorry, your money is not enough!!";
    } else {
      const change = this.money - this.totalPay;
      this.paymentResult = `Payment Success, your change is ${change}`;
    }
    return this.paymentResult;
  }
}

// Testcase
// The product (name, price, qty)
const product1 = new Product("Laptop", 10000000, 2);
const product2 = new Product("Mouse", 200000, 1);
const product3 = new Product("Mouse Pad", 50000, 1);
const product4 = new Product("Kopi", 40000, 10);

const cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4);

const cartTotal = cart.getTotal();

// Payment
const pay1 = new Checkout(30000000, cartTotal);
const pay2 = new Checkout(20650000, cartTotal);
const pay3 = new Checkout(10000000, cartTotal);

// poin 1
console.log(pay1.transaction()); // Payment Success, your change is 9350000
console.log(pay2.transaction()); // Payment Success!!
console.log(pay3.transaction()); // Sorry, your money is not enough!!

// pont 2
console.table(cart.getCartDetail());
// output
// ┌─────────┬─────────────┬─────┬──────────┐
// │ (index) │    Name     │ Qty │  Price   │
// ├─────────┼─────────────┼─────┼──────────┤
// │    0    │  'Laptop'   │  2  │ 20000000 │
// │    1    │   'Mouse'   │  1  │  200000  │
// │    2    │ 'Mouse Pad' │  1  │  50000   │
// │    3    │   'Kopi'    │ 10  │  400000  │
// └─────────┴─────────────┴─────┴──────────┘
