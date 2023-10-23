import { useParams } from "react-router-dom";
import { fetchProduct } from "../utils/helperFunctions";
import { TProduct, TProductParams } from "../types/products";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

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

  // Mutations
  const mutation = useMutation<{ data: TProduct }, Error, unknown>({
    mutationFn: (newProduct) => {
      return axios.put(
        `https://dummyjson.com/products/${params.productId}`,
        newProduct
      );
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
      <div>{product?.title}</div>

      <>
        {mutation.isPending ? (
          <p>Updating product...</p>
        ) : mutation.isError ? (
          <p>Error in updating</p>
        ) : null}

        {mutation.isSuccess ? <p>{mutation.data.data.title}</p> : null}
        <button
          onClick={() => {
            mutation.mutate({
              title: `Updating Product ${product?.title} to New ${product?.title}`,
            });
          }}
        >
          Create Product
        </button>
      </>
    </>
  );
};

export default Product;
