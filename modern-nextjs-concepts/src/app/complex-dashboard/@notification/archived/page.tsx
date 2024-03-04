import Card from "@/components/Card";
import Link from "next/link";

const ArchivedNotificationPage = () => {
  return (
    <Card>
      Notification Service
      <Link href={"/complex-dashboard"}>Default</Link>
    </Card>
  );
};

export default ArchivedNotificationPage;
