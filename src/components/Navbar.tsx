import type { NavigateFunction } from "react-router";

type FooterNavItem = {
  name: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
    color?: string;
  }>;
  link: string;
};

type NavbarProps = {
  footerNavItems: FooterNavItem[];
  navigate: NavigateFunction;
};

const Navbar: React.FC<NavbarProps> = ({ footerNavItems, navigate }) => {
  const getActiveRoute = (itemName: string): boolean => {
    const routeMap: { [key: string]: string[] } = {
      Playfun: ["/playfun"],
      Giftcode: ["/giftcode"],
      "Nạp tiền": ["/"],
      "Hỗ trợ": ["/support"],
      "Tài khoản": ["/account"],
    };

    const routes = routeMap[itemName] || [];
    return routes.includes(location.pathname);
  };

  return (
    <>
      {footerNavItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = getActiveRoute(item.name);

        return (
          <button
            key={index}
            className="group no-underline w-1/5 h-[58px] flex flex-col md:flex-row justify-center items-center gap-0 md:gap-1 text-[#8d8d8d] hover:text-[#ee4623] transition-colors duration-200 cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <Icon
              strokeWidth={1.5}
              className={`
                transition-colors duration-200 w-6 h-6
                ${isActive ? "text-[#ee4623]" : "text-[#8d8d8d]"}
                group-hover:text-[#ee4623]
              `}
            />

            <p
              className={`
                transition-colors duration-200 font-roboto text-[11px] md:text-[15px] font-normal
                ${isActive ? "text-[#ee4623]" : "text-inherit"}
                group-hover:text-[#ee4623]
              `}
            >
              {item.name}
            </p>
          </button>
        );
      })}
    </>
  );
};

export default Navbar;
