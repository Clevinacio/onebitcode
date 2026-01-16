import User from "./User.js";
import Product from "./Product.js";

const newUser = new User("Cleverton Inácio", "teste", "teste");
newUser.login("teste2", "teste");

const newProduct = new Product("Abrobinha", "Uma abroba pequena", 100.0);
newProduct.addToStock(100);
newProduct.addToStock(30);
console.log(
  `Atualmente existem ${newProduct.inStock} ${newProduct.name}(s) no estoque.`
);
newProduct.calculateDiscount(30);
