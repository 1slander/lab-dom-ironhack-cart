// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");

  const quantity = product.querySelector(".quantity input");

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;

  const subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let finalPrice = 0;
  const products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    finalPrice += updateSubtotal(products[i]);
  }
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span");
  total.innerText = finalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const parentTarget = target.parentNode;
  const parent = parentTarget.parentNode;
  const rmvBtn = document.querySelector(".product");
  rmvBtn.parentNode.removeChild(parent);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }
});
