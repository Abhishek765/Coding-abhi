import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <ul className="text-green-500 list-disc">
      <li>
        <Link href="/products">Dynamic Routing</Link>
      </li>
    </ul>
  );
}
