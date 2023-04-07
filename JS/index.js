document.getElementById('icon').addEventListener('click', function () {
    var nav = document.getElementsByTagName('nav')[0];
    if (nav.style.display == 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}, false);

// ============ Sliding images JS =================================//

$(function() {
   $(".heart").on("click", function() {
     $(this).toggleClass("is-active");
   });
 });

// =================Sliding Images JS End ==========================//

let cartIcon = document.querySelector("#cart-icon");
let cartIcon1 = document.querySelector("#cart-icon1");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
cartIcon1.onclick = () => {
  cart.classList.add("active");
};

// close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// cart working

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // remove item cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");

  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  // Quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

// remove from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
// quantity change

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

//  =============== Add To Cart Items ======================= //

function addSelectedProducts() {
  // Get all the checkbox input elements
  let checkboxes = document.querySelectorAll(
    '#product-list input[type="checkbox"]'
  );
  // Loop through the checkboxes to find the checked ones
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    if (checkbox.checked) {
      let pname = checkbox.closest(".product-card").children[2].innerHTML;
      let pricename = checkbox.closest(".product-card").children[3].innerHTML;
      let productimg = checkbox.closest(".product-card").children[1].src;

      // var cart = document.getElementsByClassName(".cart-content") || [];
      // var isProductInCart = false;
      // for (var i = 0; i < cart.length; i++) {
      //   if (
      //     cart[i].pname === pname &&
      //     cart[i].pricename === pricename &&
      //     cart[i].productimg === productimg
      //   ) {
      //     isProductInCart = true;
      //     break;
      //   }
      // }
      // if (!isProductInCart) {
      //   cart.push(cartShopBox);
      // }

      var cartShopBox = document.createElement("div");

      cartShopBox.innerHTML = `
            <div class="cart-box">
            <img src="${productimg}" alt="" class="cart-img">
            <div class="detail-box">
              <div class="cart-product-title">${pname}</div>
              <div class="cart-price">${pricename}</div>
              <input type="number" value="1" class="cart-quantity">
            </div>
            
            <i class="fa fa-trash cart-remove" aria-hidden="true"></i>
          </div> `;

      cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
      cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);

      // add cart item to cart
      var cartItems = document.querySelector(".cart-content");
      cartItems.appendChild(cartShopBox);
    }
  }
  updatetotal();
}


$('.carousel').carousel({
  interval: false,
});
