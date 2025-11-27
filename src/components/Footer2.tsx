import logo from "@assets/logo/logo-funtap.png";

export default function Footer2() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="bg-gray-100 w-full flex flex-col justify-center items-center px-[15px]! pt-10! pb-5!">
        <div className="flex flex-col gap-[7px] justify-center items-center text-center font-roboto font-normal text-xs text-[#61616a]">
          <img
            src={logo}
            alt="logo"
            style={{ width: 148, height: 46, marginBottom: 35 }}
          />
          <p className="leading-5">
            Email:{" "}
            <span className="text-[#ee4623] font-medium underline">
              hotro@funtap.vn
            </span>
          </p>
          <p className="leading-5">
            Funtap security:{" "}
            <span className="text-[#ee4623] font-medium underline">
              Infosec@funtap.vn
            </span>
          </p>
          <p className="leading-5">
            Người chịu trách nhiệm nội dung: <b>Ông Đào Quang Tuấn</b>
          </p>
          <p className="max-w-[350px] leading-4">
            Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số
            201/GP-BTTTT ngày 14 tháng 05 năm 2018.
          </p>
          <p className="max-w-[400px] leading-4">
            Giấy chứng nhận đăng ký cung cấp dịch vụ trò chơi điện tử trên mạng
            số 125/GCN-PTTH&TTĐT ngày 16 tháng 7 năm 2020.
          </p>
          <p>Copyright © 2019 Funtap.</p>
        </div>
      </div>
    </div>
  );
}
