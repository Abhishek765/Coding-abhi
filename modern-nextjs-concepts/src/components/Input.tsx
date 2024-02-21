"use client";

import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default Input;
