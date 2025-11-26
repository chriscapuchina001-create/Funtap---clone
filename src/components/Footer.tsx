import warnImg from "@assets/background/logo  18.png";
import ggPlayImg from "@assets/background/Ứng dụng Playfun (1).png";
import appStoreImg from "@assets/background/Ứng dụng Playfun.png";
import logoImg from "@assets/logo/logo-funtap.png";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="bg-[#F7F7F7] w-full max-w-3xl flex flex-col justify-center items-center px-[15px]! pt-6! pb-4!">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-row items-center gap-3 mb-5!">
            <img
              src={logoImg}
              alt="logoImg"
              className="w-[118px] h-9 object-contain"
            />
            <img
              src={warnImg}
              alt="warnImg"
              className="w-[137px] h-[60px] md:h-[70px] object-contain"
            />
          </div>

          <div className="flex flex-col items-center space-y-1 mb-3! gap-1.5 text-[#61616a] font-poppins text-xs md:text-[13.5px] font-normal">
            <p className="">
              Email: <strong>hotro@funtap.vn</strong> | Hotline:{" "}
              <strong>1900 636 452</strong>
            </p>
            <p>
              Funtap security: <strong>Infosec@funtap.vn</strong>
            </p>
            <p>
              Người chịu trách nhiệm nội dung:{" "}
              <strong>Ông Đào Quang Tuấn</strong>
            </p>
            <p className="max-w-[620px]">
              Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng do Cục
              Phát Thanh, Truyền Hình và Thông tin Điện tử cấp ngày 25 tháng 4
              năm 2025
            </p>
            <p className="max-w-[510px]">
              Giấy chứng nhận đăng ký cung cấp dịch vụ trò chơi điện tử trên
              mạng số 125/GCN-PTTH&TTĐT ngày 16 tháng 7 năm 2020
            </p>
          </div>

          <div className="mb-4!">
            <p className="text-[#1f1f1f] uppercase mb-3! font-poppins font-semibold text-xs md:text-[13.5px]">
              Tải ứng dụng Playfun tại
            </p>
            <div className="flex gap-3 justify-center">
              <button className="cursor-pointer">
                <img
                  src={ggPlayImg}
                  alt="ggPlayImg"
                  className="w-[126px] h-9"
                />
              </button>
              <button className="cursor-pointer">
                <img
                  src={appStoreImg}
                  alt="appStoreImg"
                  className="w-[126px] h-9"
                />
              </button>
            </div>
          </div>

          <p className="text-[#8e8e93] font-poppins text-xs md:text-[13.5px] font-normal">
            Copyright © 2019 Funtap.
          </p>
        </div>
      </div>
    </div>
  );
}
