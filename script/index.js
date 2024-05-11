let learningViewing = document.querySelector(".learner-cards");
let sweetViewing = document.querySelector(".sweet-cards");
let finanaceViewing = document.querySelector(".finance-card");

let learnerItems = "";
let sweetItems = "";
let financeItems = "";
myFunction();
// To Maitain a list Of WishList Courses.
function wishlistButton(itemID) {
  //since in our local storage we inserted our array in the form of String
  let itemIDArr = localStorage.getItem("WishlistItemID");
  itemIDArr == null
    ? (itemIDArr = [itemID])
    : (itemIDArr = [...JSON.parse(itemIDArr), itemID]);
  //To maintain an Unique array elements
  let updateUniquearray = uniqueArrElements(itemIDArr);
  //mapping our Array in the form string to our key
  let itemIDArrString = JSON.stringify(updateUniquearray);
  localStorage.setItem("WishlistItemID", itemIDArrString);
  myFunction();
}

// To Maitain a list Of BuyButton Courses.

function BuyButton(itemID) {
  //since in our local storage we inserted our array in the form of String
  let itemIDArr = localStorage.getItem("BuyItemID");
  itemIDArr == null
    ? (itemIDArr = [itemID])
    : (itemIDArr = [...JSON.parse(itemIDArr), itemID]);
  //To maintain an Unique array elements
  let updateUniquearray = uniqueArrElements(itemIDArr);
  //mapping our Array in the form string to our key
  let itemIDArrString = JSON.stringify(updateUniquearray);
  localStorage.setItem("BuyItemID", itemIDArrString);
  myFunction();
}
// Function to maintain unique elements in our array
function uniqueArrElements(arr) {
  let uniqueElementArr = [];
  //Creating a map
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in result)) {
      result[arr[i]] = 1;
      uniqueElementArr.push(arr[i]);
    }
  }
  console.log(uniqueElementArr);
  return uniqueElementArr;
}

learner_item.map((item) => {
  learnerItems += `<div class="item-inside">
   <div class="image"> <img src="${item.image}" alt="the ultimate react course for 2024"></div>
   <div class="course-name">${item["course-name"]}</div>
   <div class="course-author">${item["course-author"]}</div>
   <div class="rating">
    <div class="rating-number">${item.rating["rating-number"]}</div>
    <div class="num-of-ratings">${item.rating["num-of-ratings"]}</div>
    <button onclick="wishlistButton(${item.id})">Wishlist</button>
   </div>
   <div class="price">
    <div class="discount-price">₹${item.price["discount-price"]}</div>
    <div class="original-price">₹${item.price["original-price"]}</div>
    <button onclick="BuyButton(${item.id})">Buy</button>
   </div>
</div>`;
});
learningViewing.innerHTML = `${learnerItems}`;

sweet.map((item) => {
  sweetItems += `<div class="item-inside">
   <div class="image"> <img src="${item.image}" alt="the ultimate react course for 2024"></div>
   <div class="course-name">${item["course-name"]}</div>
   <div class="course-author">${item["course-author"]}</div>
   <div class="rating">
    <div class="rating-number">${item.rating["rating-number"]}</div>
    <div class="num-of-ratings">${item.rating["num-of-ratings"]}</div>
    <button onclick="wishlistButton(${item.id})" >Wishlist</button>
   </div>
   <div class="price">
    <div class="discount-price">₹${item.price["discount-price"]}</div>
    <div class="original-price">₹${item.price["original-price"]}</div>
    <button onclick="BuyButton(${item.id})">Buy</button>
   </div>
</div>`;
});
sweetViewing.innerHTML = `${sweetItems}`;

financial.map((item) => {
  financeItems += `<div class="item-inside">
   <div class="image"> <img src="${item.image}" alt="the ultimate react course for 2024"></div>
   <div class="course-name">${item["course-name"]}</div>
   <div class="course-author">${item["course-author"]}</div>
   <div class="rating">
    <div class="rating-number">${item.rating["rating-number"]}</div>
    <div class="num-of-ratings">${item.rating["num-of-ratings"]}</div>
    <button onclick="wishlistButton(${item.id})">Wishlist</button>
   </div>
   <div class="price">
    <div class="discount-price">₹${item.price["discount-price"]}</div>
    <div class="original-price">₹${item.price["original-price"]}</div>
    <button onclick="BuyButton(${item.id})">Buy</button>
   </div>
</div>`;
});
finanaceViewing.innerHTML = `${financeItems}`;
// to check wheter our wishlist and cart is empty or not
function myFunction() {
  if (localStorage.getItem("WishlistItemID") != "[]") {
    var element = document.querySelector(".wishlist-item");
    element.classList.add("favorite");
  } else {
    var element = document.querySelector(".wishlist-item");
    element.classList.remove("favorite");
  }
  if (localStorage.getItem("BuyItemID") != "[]") {
    var element = document.querySelector(".cart-item");
    element.classList.add("shopping_cart");
  } else {
    var element = document.querySelector(".cart-item");
    element.classList.remove("shopping_cart");
  }
}
