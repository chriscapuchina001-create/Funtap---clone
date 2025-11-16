import warnImg from "@assets/background/logo  18.png";
import ggPlayImg from "@assets/background/Ứng dụng Playfun (1).png";
import appStoreImg from "@assets/background/Ứng dụng Playfun.png";
import logoImg from "@assets/logo/logo-funtap.png";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="bg-gray-100 w-full max-w-3xl flex flex-col justify-center items-center px-[15px]! pt-6! pb-4!">
        <div className="pt-8 pb-5 flex flex-col justify-center items-center text-center">
          <div className="flex flex-row items-center gap-3 mb-5!">
            <img src={logoImg} alt="logoImg" className="w-[118px] h-10" />
            <img src={warnImg} alt="warnImg" className="w-[137px] h-[70px]" />
          </div>

          <div className="flex flex-col items-center space-y-1 mb-3! gap-1.5">
            <p
              className="text-[#61616a]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Email: <strong>hotro@funtap.vn</strong> | Hotline:{" "}
              <strong>1900 636 452</strong>
            </p>
            <p
              className="text-[#61616a]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Funtap security: <strong>Infosec@funtap.vn</strong>
            </p>
            <p
              className="text-[#61616a]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Người chịu trách nhiệm nội dung:{" "}
              <strong>Ông Đào Quang Tuấn</strong>
            </p>
            <p
              className="text-[#61616a] max-w-[560px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng do Cục
              Phát Thanh, Truyền Hình và Thông tin Điện tử cấp ngày 25 tháng 4
              năm 2025
            </p>
            <p
              className="text-[#61616a] max-w-[450px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Giấy chứng nhận đăng ký cung cấp dịch vụ trò chơi điện tử trên
              mạng số 125/GCN-PTTH&TTĐT ngày 16 tháng 7 năm 2020
            </p>
          </div>

          <div className="mb-4!">
            <p
              className="text-[#1f1f1f] uppercase mb-2!"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
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

          <p
            className="text-[#8e8e93]"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            Copyright © 2019 Funtap.
          </p>
        </div>
      </div>
    </div>
  );
}
