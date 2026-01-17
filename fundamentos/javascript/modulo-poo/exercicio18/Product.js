export default class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(value) {
    this.inStock += value;
  }

  calculateDiscount(percentage) {
    const valueWithDiscount = this.price * (1 - percentage / 100);
    console.log(
      `O valor com ${percentage}% de desconto é: ${valueWithDiscount}`,
    );
  }
}
