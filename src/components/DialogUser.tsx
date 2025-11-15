import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CircleDotDashed, CirclePoundSterling, LogOut } from "lucide-react";

const DialogUser = ({ user, logout, isDialogOpen, setIsDialogOpen }) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="top-[40%] animate-in! slide-in-from-top! duration-300! [&>button]:hidden  w-[452px]">
        <DialogHeader>
          <DialogTitle className="hidden" />
          <DialogDescription className="hidden" />
          <div className="py-5! px-4!">
            <div className="flex items-center gap-3 mb-4!">
              <div className="flex flex-row items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f8941e] text-white uppercase">
                  <p
                    className="text-white"
                    style={{ fontFamily: "Roboto, sans-serif", fontSize: 16 }}
                  >
                    {user.loginType === "email" ? "G" : "F"}
                  </p>
                </div>
                <p className="font-medium text-[#575757]">{user.username}</p>
              </div>
              <p
                className="text-[#61616a]"
                style={{ fontFamily: "Roboto, sans-serif", fontSize: 14 }}
              >
                / ID: {user.id}
              </p>
            </div>

            <div className="flex flex-row items-center justify-center mb-4!">
              <div className="flex flex-col gap-2.5 justify-center items-center w-[50%] border-r! border-[#d1d1d6]!">
                <p
                  className="text-[#ee4623]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  0
                </p>
                <div className="flex flex-row items-center gap-2">
                  <CirclePoundSterling color="#FFB244" />
                  <p
                    className="uppercase text-[#575757]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                    }}
                  >
                    funcoin
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 justify-center items-center w-[50%]">
                <p
                  className="text-[#ee4623]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  0
                </p>
                <div className="flex flex-row items-center gap-2">
                  <CircleDotDashed color="#FFB244" />
                  <p
                    className="uppercase text-[#575757]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                    }}
                  >
                    thóc
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-5! gap-3.5!">
              <button
                className="p-[5px] w-full h-10 border-[#d1d1d6] border rounded-[5px] cursor-pointer"
                onClick={() => setIsDialogOpen(false)}
              >
                Lịch sử giao dịch
              </button>
              <button
                className="p-[5px] w-full h-10 border-[#d1d1d6] border rounded-[5px] cursor-pointer"
                onClick={() => setIsDialogOpen(false)}
              >
                Cài đặt thanh toán
              </button>
              <button
                className="p-[5px] w-full h-10 border-[#d1d1d6] border rounded-[5px] cursor-pointer"
                onClick={() => setIsDialogOpen(false)}
              >
                Cài đặt tài khoản
              </button>
              <button
                className="p-[5px] w-full h-10 border-[#d1d1d6] border rounded-[5px] flex flex-row items-center justify-center gap-1.5 cursor-pointer"
                onClick={() => {
                  setIsDialogOpen(false);
                  logout();
                }}
              >
                <LogOut size={20} />
                <p>Đăng xuất</p>
              </button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUser;
