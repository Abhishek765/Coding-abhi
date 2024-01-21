import { Metadata } from "next";
import React from "react";

type Props = {
  params: { productId: string };
};
/**
 *
 * @description -> a function to generate dynamic metadata
 */
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  return <div>Details about the product {params.productId}</div>;
};

export default ProductDetails;
