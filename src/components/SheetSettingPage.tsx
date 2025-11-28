import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowRightLeft,
  CreditCard,
  History,
  Home,
  Menu,
  ShieldQuestion,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router";
import type { LucideIcon } from "lucide-react";

interface ListItem {
  icon: LucideIcon;
  text: string;
  link: string;
}

const listItems: ListItem[] = [
  {
    icon: Home,
    text: "Trang chủ",
    link: "/",
  },
  {
    icon: CreditCard,
    text: "Nạp tiền",
    link: "/payment",
  },
  {
    icon: Users,
    text: "Khách hàng thân thiết",
    link: "/vip",
  },
  {
    icon: History,
    text: "Lịch sử nạp",
    link: "/history",
  },
  {
    icon: ArrowRightLeft,
    text: "Nhận & đổi giftcode",
    link: "/giftcode",
  },
  {
    icon: ShieldQuestion,
    text: "Hỗ trợ",
    link: "/support",
  },
];

export function SheetSettingPage() {
  const navigate = useNavigate();

  const handleNavigation = (link: string) => {
    navigate(link);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="w-5.5 h-5.5 flex justify-center items-center ml-[15px] cursor-pointer md:absolute md:-left-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Mở menu điều hướng"
        >
          <Menu color="white" size={20} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[65%] md:w-80 p-0 bg-white border-r border-gray-200"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Menu Điều Hướng</SheetTitle>
          <SheetDescription>
            Menu điều hướng chính cho ứng dụng
          </SheetDescription>
        </SheetHeader>

        <nav className="h-full pt-3!">
          <ul className="space-y-2">
            {listItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.link)}
                    className="w-full flex items-center gap-6 px-6! py-4! text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                  >
                    <Icon size={20} className="text-gray-600 shrink-0" />
                    <span className="text-gray-800 font-medium text-sm">
                      {item.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
