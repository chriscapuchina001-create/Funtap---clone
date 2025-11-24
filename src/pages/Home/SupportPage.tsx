import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";
import { footerNavItems } from "../../../public/mock-api/homeData";
import { useNavigate } from "react-router";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const SupportPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-[#F3F4F4] font-roboto text-gray-87 text-base font-normal">
      <div className="flex flex-col justify-center items-center w-full bg-[#fafbfb] relative">
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          navigate={navigate}
          logout={logout}
        />

        <div className="w-full max-w-3xl flex flex-row justify-start items-start gap-1 bg-white py-[11.25px]! px-6!">
          <p
            className="text-[#7e7e7e]"
            style={{
              fontSize: 13.5,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
          >
            Trang chủ &gt;
          </p>
          <p
            className="text-[#ee4623]"
            style={{
              fontSize: 13.5,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
          >
            Hỗ trợ
          </p>
        </div>

        <main className="w-full flex flex-col justify-center items-center gap-0 ">
          <div className="w-full max-w-3xl h-100 bg-white"></div>
        </main>

        <Footer />

        <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40">
          <div className="w-full max-w-3xl flex flex-row justify-center items-center bg-white border-t! border-[#dadada]! relative">
            <Navbar footerNavItems={footerNavItems} navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
