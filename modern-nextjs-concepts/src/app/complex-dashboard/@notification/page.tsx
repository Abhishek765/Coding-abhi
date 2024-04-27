import Card from "@/components/Card";
import Link from "next/link";

const NotificationPage = () => {
  return (
    <Card>
      Notification Service
      <Link
        href={"/complex-dashboard/archived"}
        className="text-blue-500 underline"
      >
        Archived
      </Link>
    </Card>
  );
};

export default NotificationPage;
