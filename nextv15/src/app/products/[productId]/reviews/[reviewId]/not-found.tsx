"use client";

import { usePathname } from "next/navigation";
import React from "react";

const ReviewNotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <h1>
        Review {reviewId} not found for product {productId}
      </h1>
    </div>
  );
};

export default ReviewNotFound;
