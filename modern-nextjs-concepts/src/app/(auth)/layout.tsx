import ActiveLink from "@/components/ActiveLink";
import Input from "@/components/Input";

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
