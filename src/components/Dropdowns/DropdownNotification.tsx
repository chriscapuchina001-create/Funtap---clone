import { DropdownWithFade } from "@/components/Dropdowns/DropdownWithFade";
import { Bell } from "lucide-react";

const DropdownNotification = () => {
  const notificationCount = 3;

  const notificationItems = [];

  //  const notificationItems = [
  //   {
  //     label: "Thông báo 1",
  //     icon: <Bell className="h-4 w-4" />,
  //     onClick: () => console.log("Thông báo 1 clicked"),
  //   },
  //   {
  //     label: "Thông báo 2",
  //     icon: <Bell className="h-4 w-4" />,
  //     onClick: () => console.log("Thông báo 2 clicked"),
  //   },
  //   {
  //     label: "Thông báo 3",
  //     icon: <Bell className="h-4 w-4" />,
  //     onClick: () => console.log("Thông báo 3 clicked"),
  //   },
  // ];

  return (
    <DropdownWithFade
      trigger={
        <button className="cursor-pointer relative mr-1!">
          <Bell size={21} color="#8E8E93" />
          {notificationCount > 0 && (
            <span className="text-xs font-roboto font-medium absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
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
