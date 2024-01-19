const Product = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <div>Product {params.productId}</div>;
};

export default Product;
