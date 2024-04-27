import Card from "@/components/Card";
import Link from "next/link";

const ArchivedNotificationPage = () => {
  return (
    <Card>
      Notification Service
      <Link href={"/complex-dashboard"} className="text-blue-500 underline">
        Default
      </Link>
    </Card>
  );
};

export default ArchivedNotificationPage;
