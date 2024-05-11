let BuyItemListContainer = document.querySelector(".cart-Items-conatainer");
let BuyItemList = "";
let IDArr = [];
let ItemsId = localStorage.getItem("BuyItemID");
repaint();

function DeleteButton(eventId, IDArr) {
  let result = IDArr.filter((item) => item != eventId);

  localStorage.setItem("BuyItemID", JSON.stringify(result));
  //After delet our reapint cycle should occur
  BuyItemList = "";
  ItemsId = localStorage.getItem("BuyItemID");
  repaint();
}

function repaint() {
  // When our ItemId is Not empty
  if (ItemsId != "[]") {
    IDArr = [...JSON.parse(ItemsId)];
    IDArr.forEach((element) => {
      if (element >= 1 && element <= 7) {
        learner_item.map((item) => {
          if (item.id == element) {
            BuyItemList += `<div class="item-inside">
      <button  class="delete" onclick="DeleteButton(${item.id},IDArr)">X</button>
       <div class="image"> <img src='../${item.image}' alt="the ultimate react course for 2024"></div>
       <div class="course-name">${item["course-name"]}</div>
       <div class="course-author">${item["course-author"]}</div>
       <div class="rating">
        <div class="rating-number">${item.rating["rating-number"]}</div>
        <div class="num-of-ratings">${item.rating["num-of-ratings"]}</div>

       </div>
       <div class="price">
        <div class="discount-price">₹${item.price["discount-price"]}</div>
        <div class="original-price">₹${item.price["original-price"]}</div>

       </div>
    </div>`;
          }
        });
      } else if (element >= 8 && element <= 13) {
        sweet.map((item) => {
          if (item.id == element) {
            BuyItemList += `<div class="item-inside">
      <button  class="delete" onclick="DeleteButton(${item.id},IDArr)">X</button>

       <div class="image"> <img src='../${item.image}' alt="the ultimate react course for 2024"></div>
       <div class="course-name">${item["course-name"]}</div>
       <div class="course-author">${item["course-author"]}</div>
       <div class="rating">
        <div class="rating-number">${item.rating["rating-number"]}</div>
        <div class="num-of-ratings">${item.rating["num-of-ratings"]}</div>

       </div>
       <div class="price">
        <div class="discount-price">₹${item.price["discount-price"]}</div>
        <div class="original-price">₹${item.price["original-price"]}</div>

       </div>
    </div>`;
          }
        });
      } else if (element >= 14 && element <= 17) {
        financial.map((item) => {
          if (item.id == element) {
            BuyItemList += `<div class="item-inside">
      <button  class="delete" onclick="DeleteButton(${item.id},IDArr)">X</button>

       <div class="image"> <img src='../${item.image}' alt="the ultimate react course for 2024"></div>
       <div class="course-name">${item["course-name"]}</div>
       <div class="course-author">${item["course-author"]}</div>
       <div class="rating">
        <div class="rating-number">${item.rating["rating-number"]}</div>
        <div class="num-of-ratings">${item.rating["num-of-ratings"]}</div>

       </div>
       <div class="price">
        <div class="discount-price">₹${item.price["discount-price"]}</div>
        <div class="original-price">₹${item.price["original-price"]}</div>

       </div>
    </div>`;
          }
        });
      }
    });
  }
  // When our ItemId is  empty
  else if (ItemsId === "[]") {
    BuyItemList =
      "<h4 class='emptyList'>Your cart is empty. Keep shopping to find a course!<h4>";
  }
  BuyItemListContainer.innerHTML = BuyItemList;
  myFunction();
}

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
