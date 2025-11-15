import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, SquareAsterisk, User } from "lucide-react";
import { sheetHomeData } from "../../public/mock-api/homeData";

export function SheetHomePage() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-6 h-6 flex justify-center items-center ml-[15px]">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-80 inset-y-0 left-0 transform translate-x-0 data-[state=closed]:-translate-x-full [&>button]:cursor-pointer"
      >
        <SheetTitle className="hidden">Menu Navigation</SheetTitle>
        <SheetDescription className="hidden">
          Main navigation menu for the application
        </SheetDescription>

        <div className="p-4">
          <img
            src="../../public/images/logo/logo-funtap.png"
            alt="logo"
            style={{ width: 120, height: 35, margin: 12 }}
          />
          <div className="h-2 bg-[#f2f2f2] border-b! border-[#f2f2f2]!" />
          <nav>
            <ul className="space-y-2">
              {sheetHomeData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex flex-row items-center p-4! pl-6! gap-3 hover:bg-gray-100 rounded-lg text-black border-b! border-[#f2f2f2]!"
                    >
                      <IconComponent size={24} className="text-[#ee4623]" />
                      <span className="ml-3">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="h-2 bg-[#f2f2f2] border-b! border-[#f2f2f2]!" />
          <nav>
            <ul className="space-y-2">
              {[
                {
                  name: "ID Funtap",
                  icon: User,
                },
                {
                  name: "Funcard",
                  icon: SquareAsterisk,
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex flex-row items-center p-4! pl-6! gap-3 hover:bg-gray-100 rounded-lg text-black border-b! border-[#f2f2f2]!"
                    >
                      <IconComponent size={24} className="text-[#ee4623]" />
                      <span className="text-[16px]">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
