const IndividualReviewPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      Product with id: {productId}, having reviewId: {reviewId}
    </div>
  );
};

export default IndividualReviewPage;
