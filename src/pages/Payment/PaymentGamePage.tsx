import { useLocation, useNavigate } from "react-router";
import logo from "@assets/logo/logo-funtap.png";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
const PaymentGamePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { gameImage, gameName } = location.state || {};

  const [server, setServer] = useState("");
  const [id, setId] = useState("");

  return (
    <div className="w-full min-h-screen bg-[#F3F4F4] flex flex-col justify-start items-center">
      <div className="w-full max-w-3xl">
        <header className="sticky top-0 left-0 z-40 w-full grid place-items-center">
          <div className="w-full flex justify-between items-center h-14 bg-white border-b! border-[#eeeeee]! shadow-md">
            <div className="flex flex-row items-center gap-1">
              <button
                onClick={() => window.history.back()}
                className="w-12 h-12 flex justify-center items-center no-underline"
              >
                <ChevronLeft size={26} color="#010101" />
              </button>
              <img
                src={logo}
                alt="logo"
                className="w-[120px] sm:w-[140px] sm:h-[41px]"
                style={{
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
              />
            </div>
          </div>
        </header>
        <div className="bg-white p-4! border-b! border-[#ebebeb]!">
          <b className="text-sm font-roboto text-[#222222]">
            CHÚ Ý:{" "}
            <span className="text-red-500">
              {"  "}
              Tài khoản thóc không hỗ trợ cho dự án {gameName}. Giao dịch nạp
              game {gameName} sẽ không làm thay đổi số lượng Funcoin và điểm
              hạng FunVIP.
            </span>
          </b>
        </div>

        <div className="flex flex-row items-center gap-5 bg-white pt-8! px-4! pb-4! border-b! border-[#ebebeb]!">
          <img
            src={gameImage}
            alt="gameImage"
            className="w-15 h-15 rounded-sm"
          />
          <p className="font-roboto text-base font-medium">{gameName}</p>
        </div>

        <div className="flex flex-row justify-between items-end">
          <div className="w-[35%]">
            <p>Server</p>
            <input
              id="account"
              type="text"
              value={server}
              onChange={(e) => setServer(e.target.value)}
              placeholder=""
              className="border! border-[#e5e5ea] h-10 w-full rounded-sm"
              required
            />
          </div>
          <div className="w-[35%]">
            <p>ID nhân vật</p>
            <input
              id="account"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder=""
              className="border! border-[#e5e5ea] h-10 w-full rounded-sm"
              required
            />
          </div>
          <div className="w-[20%]">
            <button>Lấy nhân vật</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGamePage;
