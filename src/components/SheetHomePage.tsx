import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HandCoins, Menu, SquareAsterisk, User } from "lucide-react";
import { sheetHomeData } from "../../public/mock-api/homeData";
import logoImg from "@assets/logo/logo-funtap.png";

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
        className="w-[70%] md:w-80 inset-y-0 left-0 transform translate-x-0 data-[state=closed]:-translate-x-full [&>button]:cursor-pointer"
      >
        <SheetTitle className="hidden">Menu Navigation</SheetTitle>
        <SheetDescription className="hidden">
          Main navigation menu for the application
        </SheetDescription>

        <div className="">
          <img
            src={logoImg}
            alt="logo"
            className="m-2.5! md:m-3!"
            style={{ width: 120, height: 35 }}
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
                      className="flex flex-row items-center p-3.5! md:p-4! md:pl-6! gap-2.5 md:gap-3 hover:bg-gray-100 rounded-lg text-black border-b! border-[#f2f2f2]!"
                    >
                      <IconComponent className="text-[#ee4623] w-5 md:w-6 h-5 md:h-6" />
                      <span className="text-[#000000] text-sm md:text-base font-poppins font-normal">
                        {item.name}
                      </span>
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
                  name: "Nạp Funtap",
                  icon: HandCoins,
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
                      className="flex flex-row items-center p-4! md:pl-6! gap-2.5 md:gap-3 hover:bg-gray-100 rounded-lg text-black border-b! border-[#f2f2f2]!"
                    >
                      <IconComponent className="text-[#ee4623] w-5 md:w-6 h-5 md:h-6" />
                      <span className="text-[#000000] text-sm md:text-base font-poppins font-normal">
                        {item.name}
                      </span>
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
