import Card from "@/components/Card";
import Link from "next/link";

const NotificationPage = () => {
  return (
    <Card>
      Notification Service
      <Link href={"/complex-dashboard/archived"}>Archived</Link>
    </Card>
  );
};

export default NotificationPage;
