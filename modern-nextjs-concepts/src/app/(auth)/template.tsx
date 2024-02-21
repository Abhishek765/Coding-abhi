import ActiveLink from "@/components/ActiveLink";
import Input from "@/components/input";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Input />
      </div>
      <ActiveLink />
      {children}
    </>
  );
}
