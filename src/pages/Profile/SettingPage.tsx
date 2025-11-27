import { useLocation } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer3 from "@/components/Footer3";
import lockImg from "@assets/icons/lock.svg";
import userImg from "@assets/icons/user.svg";
import pcImg from "@assets/icons/pc.svg";
import fbImg from "@assets/icons/fb.svg";
import settingImg from "@assets/icons/Default.png";

const settingItems = [
  {
    image: lockImg,
    text: "Đăng nhập, mật khẩu và bảo mật",
    description: "Cài đặt thông tin đăng nhập, mật khẩu và bảo mật tài khoản",
  },
  {
    image: userImg,
    text: "Thông tin cá nhân",
    description:
      "Cập nhật thông tin cá nhân đầy đủ, kịp thời giúp bảo vệ tài khoản và được hỗ trợ nhanh chóng",
  },
  {
    image: pcImg,
    text: "Lịch sử đăng nhập",
    description: "Kiểm tra lịch sử đăng nhập tài khoản FunID của bạn",
  },
  {
    image: fbImg,
    text: "Thông tin kết nối",
    description:
      "Kết nối với Facebook, Apple để đăng nhập nhanh hơn và kết nối với bạn bè",
  },
];

const SettingPage = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-full h-14 md:h-16 bg-[#f04308] sticky top-0 left-0 flex flex-row justify-center items-center shadow-md z-40 pr-2.5!">
        <div className="w-full max-w-[660px] flex flex-row justify-center items-center">
          <div className="w-full max-w-[660px] flex justify-start items-center gap-2 md:relative">
            <button
              onClick={() => window.history.back()}
              className="w-12 h-12 flex justify-center items-center no-underline md:absolute -left-12 cursor-pointer"
            >
              <ChevronLeft size={26} color="white" />
            </button>
            <h1 className="text-white leading-14 md:leading-16 text-xl font-roboto font-normal">
              Thông tin cá nhân
            </h1>
          </div>

          {user?.loginType === "email" ? (
            <p className="w-7 h-7 rounded-full bg-[#f8941e] text-white uppercase flex justify-center items-center font-poppins text-xs font-bold">
              G
            </p>
          ) : (
            <p className="w-7 h-7 rounded-full bg-blue-500 text-white uppercase flex justify-center items-center font-poppins text-xs font-bold">
              F
            </p>
          )}
        </div>
      </div>

      <div className="w-full max-w-[660px]">
        <div className="bg-[#F6F6F6] p-4! pt-6! pb-6! flex flex-col">
          <div className="flex flex-row gap-4">
            <div className="w-12.5 h-12.5 flex justify-center items-center bg-linear-to-r bg-[#67AD3F] rounded-full text-white">
              {user?.loginType === "email" ? (
                <p className="text-3xl font-poppins font-medium">G</p>
              ) : (
                <p className="text-3xl font-poppins font-medium">F</p>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h2 className="text-[#1d1d1d] text-base md:text-[22.5px] font-roboto font-semibold">
                  {user?.username}
                </h2>
                <p className="text-[#545454] text-sm md:text-lg font-roboto font-normal">
                  ID: <span>{user?.id}</span>
                </p>
                <p className="text-[#777777] font-roboto font-normal text-sm mt-1!">
                  Hạng thành viên:{" "}
                  <span className="text-[#2755b7] font-bold">Default</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-5!">
            <img src={settingImg} alt="" className="w-22.5 h-18" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-5 p-5! border-b! border-[#eee]!">
          <div className="">
            <p className="flex justify-center items-center w-25 h-25 p-5! font-roboto text-xl font-bold border-7! rounded-full! border-[#FF0000]!">
              Yếu
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[#212121] font-roboto text-base font-medium">
              Mức độ bảo mật
            </p>
            <p className="text-[#454545] font-roboto text-sm font-normal">
              Tài khoản của bạn hiện tại có thể bị đe dọa bảo mật. Hãy hoàn
              thiện các thông tin bên dưới
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {settingItems.map((item, index) => (
            <button
              key={index}
              className="flex flex-row justify-between items-center px-4! py-6! border-b! border-[#eee]!"
            >
              <div className="flex flex-row justify-start items-start gap-3">
                <img src={item.image} alt="" className="w-[41px] h-[41px]" />
                <div className="flex flex-col items-start justify-start max-w-[75%] font-roboto text-base font-normal gap-1">
                  <p className="text-left text-black font-medium">
                    {item.text}
                  </p>
                  <p className="text-left text-sm text-[#8e8e8e]">
                    {item.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6" color="#8e8e8e" />
            </button>
          ))}
        </div>
      </div>

      <Footer3 />
    </div>
  );
};

export default SettingPage;
