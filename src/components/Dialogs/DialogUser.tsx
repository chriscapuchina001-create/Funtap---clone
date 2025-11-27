import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatText } from "@/utils/formatUtils";
import { CircleDotDashed, CirclePoundSterling, LogOut } from "lucide-react";

type User = {
  id: string;
  username: string;
  loginType: string;
};

type DialogUserProps = {
  user: User;
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  logout: () => void;
};

const DialogUser: React.FC<DialogUserProps> = ({
  user,
  logout,
  isDialogOpen,
  setIsDialogOpen,
}) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="top-[40%] animate-in! slide-in-from-top! duration-300! [&>button]:hidden w-[90%] md:max-w-[452px] rounded-sm">
        <DialogHeader>
          <DialogTitle className="hidden" />
          <DialogDescription className="hidden" />
          <div className="py-5! px-4!">
            <div className="flex items-center gap-3 mb-4!">
              <div className="flex flex-row items-center gap-1.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f8941e] text-white uppercase">
                  <p className="text-white font-poppins text-base font-semibold">
                    {user.loginType === "email" ? "G" : "F"}
                  </p>
                </div>
                <p className="font-roboto text-[#575757] font-bold text-base line-clamp-1">
                  {formatText(user.username, 10)}
                </p>
              </div>
              <p className="text-[#61616a] font-roboto text-sm">
                / ID: {user.id}
              </p>
            </div>

            <div className="flex flex-row items-center justify-center mb-4!">
              <div className="flex flex-col gap-1.5 justify-center items-center w-[50%] border-r! border-[#d1d1d6]!">
                <p className="text-[#ee4623] font-roboto text-xl font-bold">
                  0
                </p>
                <div className="flex flex-row items-center gap-1.5">
                  <CirclePoundSterling
                    color="#FFB244"
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <p className="uppercase text-[#575757] font-roboto text-xs font-normal">
                    funcoin
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 justify-center items-center w-[50%]">
                <p className="text-[#ee4623] font-roboto text-xl font-bold">
                  0
                </p>
                <div className="flex flex-row items-center gap-1.5">
                  <CircleDotDashed
                    color="#FFB244"
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <p className="uppercase text-[#575757] font-roboto text-xs font-normal">
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
                <p className="font-roboto text-[17px] font-normal text-black">
                  Lịch sử giao dịch
                </p>
              </button>
              <button
                className="p-[5px] w-full h-10 border-[#d1d1d6] border rounded-[5px] cursor-pointer"
                onClick={() => setIsDialogOpen(false)}
              >
                <p className="font-roboto text-[17px] font-normal text-black">
                  Cài đặt thanh toán
                </p>
              </button>
              <button
                className="p-[5px] w-full h-10 border-[#d1d1d6] border rounded-[5px] cursor-pointer"
                onClick={() => setIsDialogOpen(false)}
              >
                <p className="font-roboto text-[17px] font-normal text-black">
                  Cài đặt tài khoản
                </p>
              </button>
              <button
                className="p-[5px] w-full h-10 border-[#d1d1d6] border rounded-[5px] flex flex-row items-center justify-center gap-1.5 cursor-pointer"
                onClick={() => {
                  setIsDialogOpen(false);
                  logout();
                }}
              >
                <LogOut size={20} color="black" />
                <p className="font-roboto text-[17px] font-normal text-black">
                  Đăng xuất
                </p>
              </button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUser;
