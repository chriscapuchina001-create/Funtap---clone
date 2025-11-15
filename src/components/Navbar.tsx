import React from "react";

const Navbar = ({ footerNavItems, navigate }) => {
  const getActiveRoute = (itemName: string): boolean => {
    const routeMap: { [key: string]: string[] } = {
      Playfun: ["/playfun"],
      Gifcode: ["/gifcode"],
      "Nạp tiền": ["/"],
      "Hỗ trợ": ["/ho-tro"],
      "Tài khoản": ["/profile"],
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
            className="no-underline w-1/5 m-0 p-0 flex flex-row justify-center items-center h-[58px] gap-1 text-[#8d8d8d] hover:text-[#ee4623]"
            onClick={() => {
              navigate(item.link);
            }}
          >
            <Icon
              size={26}
              strokeWidth={1.5}
              className="text-inherit"
              color={isActive ? "#ee4623" : "none"}
            />
            <p
              className="text-inherit"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 15,
                fontWeight: 400,
                color: isActive ? "#ee4623" : "inherit",
              }}
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
