const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return <div> ProductPage for {productId}</div>;
};

export default ProductPage;
