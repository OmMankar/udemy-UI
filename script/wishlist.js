let wishlistItemsContainer = document.querySelector(".wishList-item-container");
let WishlistItems = "";
let IDArr = [];
let ItemsId = localStorage.getItem("WishlistItemID");
repaint();

function DeleteButton(eventId, IDArr) {
  let result = IDArr.filter((item) => item != eventId);
  console.log(result.length);
  localStorage.setItem("WishlistItemID", JSON.stringify(result));
  //After delet our reapint cycle should occur
  WishlistItems = "";
  ItemsId = localStorage.getItem("WishlistItemID");
  repaint();
}

function repaint() {
  if (ItemsId != "[]") {
    IDArr = [...JSON.parse(ItemsId)];

    IDArr.forEach((element) => {
      if (element >= 1 && element <= 7) {
        learner_item.map((item) => {
          if (item.id == element) {
            WishlistItems += `<div class="item-inside">
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
            WishlistItems += `<div class="item-inside">
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
            WishlistItems += `<div class="item-inside">
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
  } else if (ItemsId == "[]") {
    WishlistItems =
      "<h4 class='emptyList'>Your wishlist is a roadmap to your dreams. Fill it with aspirations, and let each item be a step towards your goals.<h4>";
  }
  wishlistItemsContainer.innerHTML = `${WishlistItems}`;
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
