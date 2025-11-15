import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email/Username/Phone:", email);
  };

  const footerLinks = [
    { label: "Trang chủ", href: "#" },
    { label: "Funtap", href: "#" },
    { label: "Báo lỗi", href: "#" },
    { label: "Điều khoản", href: "#" },
    { label: "Liên hệ", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <div className="w-full h-16 bg-[#f04308] flex justify-center items-center shadow-md z-40">
        <div className="w-full max-w-[660px]! flex justify-start items-center relative">
          <button
            onClick={() => window.history.back()}
            className="w-12 h-12 flex justify-center items-center no-underline absolute left-[-50px]!"
          >
            <ChevronLeft size={26} color="white" />
          </button>
          <h1
            className="text-white"
            style={{
              fontSize: 20,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
          >
            Quên mật khẩu
          </h1>
        </div>
      </div>

      <main className="w-full flex justify-center flex-1">
        <div className="w-full max-w-[660px] bg-white shadow-sm p-4!">
          <h3 className="font-roboto text-black font-medium text-lg mb-[5px]!">
            Xác thực tài khoản của bạn
          </h3>
          <p
            className="text-[#777] mb-5!"
            style={{
              fontSize: 14,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
          >
            Điền tên tài khoản, email hoặc số điện thoại của bạn để nhận mã xác
            thực.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col">
              <label
                htmlFor="account"
                className="text-[#0000008a] mb-1!"
                style={{
                  fontSize: 12,
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                }}
              >
                Email/Tên đăng nhập/SĐT
              </label>
              <input
                id="account"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="h-8! bg-transparent text-gray-900 border-b-2 border-gray-300 outline-none w-full text-base transition-colors duration-200 focus:border-[#F04308]"
                required
              />
            </div>

            <button
              type="submit"
              className="h-10 rounded-lg flex justify-center items-center bg-[#f04308] hover:bg-orange-700 transition-colors duration-200 mt-4 shadow-md"
            >
              <span
                className="text-white uppercase tracking-wide"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Tiếp tục
              </span>
            </button>
          </form>
        </div>
      </main>

      <footer className="w-full h-12 bg-gray-100 border-t border-gray-300 mt-auto">
        <div className="w-full max-w-[660px] mx-auto h-full">
          <ul className="flex items-center flex-row gap-4 h-full px-4! overflow-x-auto">
            {footerLinks.map((link, index) => (
              <li key={index} className="list-none shrink-0">
                <a
                  href={link.href}
                  className="text-[#8e8e8e] hover:text-orange-600 transition-colors duration-200 last:mr-0"
                  style={{
                    fontSize: 13,
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ForgotPassword;
