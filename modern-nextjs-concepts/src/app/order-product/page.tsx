"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
  };

  return (
    <>
      <div>OrderProduct</div>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
