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
  const name = document.querySelector(".create-product input[type=text]");
  const price = document.querySelector(".create-product input[type=number]");
  let nameValue = name.value;
  let priceValue = price.value;
  const table = document.getElementsByTagName("tbody");
  const trTag = document.createElement("tr");
  trTag.className = "product";
  trTag.innerHTML = `
  <tr class='product'>
  <td class="name">
  <span>${nameValue}</span>
</td>
<td class="price">$<span>${priceValue}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`;
  table[0].appendChild(trTag);
  if (nameValue && priceValue) {
    name.value = "";
    price.value = 0;
  }
  const removeBtn = trTag.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
