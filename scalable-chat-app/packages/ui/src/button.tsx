"use client";

import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  appName: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  children,
  className,
  appName,
  onClick,
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
