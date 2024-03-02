const groceries = {
  "Orange Juice": {
    price: 1.5,
    discount: 10,
  },
  Chocolate: {
    price: 2,
    discount: 0,
  },
};

const shoppingBag = [
  { product: "Chocolate", quantity: 3 },
  { product: "Orange Juice", quantity: 23 },
];

function getTotalPriceOfShoppingBag(shoppingBag) {
  let totalPrice = 0;

  shoppingBag.forEach((prod) => {
    const { price, discount } = groceries[prod.product];
    const discountProductPrice = discount
      ? price - (price * discount) / 100
      : price;
    const totalProductPrice = discountProductPrice * prod.quantity;

    totalPrice += totalProductPrice;
  });

  return +totalPrice.toFixed(2);
}

console.log(getTotalPriceOfShoppingBag(shoppingBag));
