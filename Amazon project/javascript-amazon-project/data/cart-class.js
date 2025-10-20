class Cart {
  cartItems;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }

    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) newCart.push(cartItem);
    });

    this.cartItem = newCart;

    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItem.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }
}

const cart = new Cart('cart-oop');
const buisnessCart = new Cart('cart-buisness');

console.log(cart);
console.log(buisnessCart);

console.log(buisnessCart instanceof Cart);
