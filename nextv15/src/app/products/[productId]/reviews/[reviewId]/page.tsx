import { notFound } from "next/navigation";

const IndividualReviewPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Product with id: {productId}, having reviewId: {reviewId}
    </div>
  );
};

export default IndividualReviewPage;
