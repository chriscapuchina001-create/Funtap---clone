import { DropdownWithFade } from "@/components/Dropdowns/DropdownWithFade";
import { Button } from "@/components/ui/button";
import {
  Bell,
  CreditCard,
  HelpCircle,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";

const DropdownNotification = () => {
  const [notificationCount, setNotificationCount] = useState(3);

  const notificationItems = [
    {
      label: "Thông báo 1",
      icon: <Bell className="h-4 w-4" />,
      onClick: () => console.log("Thông báo 1 clicked"),
    },
    {
      label: "Thông báo 2",
      icon: <Bell className="h-4 w-4" />,
      onClick: () => console.log("Thông báo 2 clicked"),
    },
    {
      label: "Thông báo 3",
      icon: <Bell className="h-4 w-4" />,
      onClick: () => console.log("Thông báo 3 clicked"),
    },
    "separator",
    {
      label: "Xem tất cả thông báo",
      icon: <Settings className="h-4 w-4" />,
      onClick: () => console.log("Xem tất cả clicked"),
    },
  ];

  return (
    <DropdownWithFade
      trigger={
        <button className="cursor-pointer relative mr-1!">
          <Bell size={21} color="#8E8E93" />
          {notificationCount > 0 && (
            <span
              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center"
              style={{
                fontSize: 12,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
              }}
            >
              {notificationCount}
            </span>
          )}
        </button>
      }
      items={notificationItems}
      align="end"
    />
  );
};

export default DropdownNotification;
