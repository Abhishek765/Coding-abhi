import ActiveLink from "@/components/ActiveLink";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ActiveLink />
      {children}
    </>
  );
}
