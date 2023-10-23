import { useParams } from "react-router-dom";
import { fetchProduct } from "../utils/helperFunctions";
import { TProduct, TProductParams } from "../types/products";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const params = useParams<TProductParams>();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<TProduct>({
    queryKey: ["product", params.productId],
    queryFn: () => fetchProduct<TProduct>(params.productId!),
    staleTime: 10000, // for next 10 seconds (after the first fetch) the data will be cached (no new request), after 10 seconds the data will be state then it will refetch the data again,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return <div>{product?.title}</div>;
};

export default Product;
