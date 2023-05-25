export const toggleIsFavorite = (item, productsCards, setProductsCard) => {
  item.isFavorite = !item.isFavorite;
  setProductsCard([...productsCards]);
};

export const toggleIsAddedToCart = (item, productsCards, setProductsCard) => {
  item.isAddedToCart = !item.isAddedToCart;
  setProductsCard([...productsCards]);
};
