export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

export const fetchProduct = async <T>(
  productId: number | string
): Promise<T> => {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  return product;
};
