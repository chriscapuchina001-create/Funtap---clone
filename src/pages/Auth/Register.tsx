import React, { useState } from "react";
import { Card, CardContent } from "@/components/CardRegister";
import { Button } from "@/components/Button";
import Input from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { AlertCircle, FileText, Shield } from "lucide-react";
import logo from "../../assets/logo/logo-funtap-white.png";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    comfirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full h-screen bg-[#E5E5E5]">
      <div className="bg-[#f04f18] w-full h-64 flex justify-center pt-12!">
        <img src={logo} alt="logo" className="w-40 h-[55px]" />
      </div>

      <div className="w-full h-auto flex flex-col relative">
        <div className="absolute -top-24 w-full flex flex-col justify-center items-center">
          <Card className="w-full max-w-[430px] min-h-[400px] bg-white rounded-md shadow-lg px-4 pb-6">
            <CardContent className="p-0">
              <h2 className="text-center text-xl font-normal text-black py-6 mb-0">
                Đăng ký
              </h2>

              <div className="space-y-4">
                <Input
                  type="text"
                  label="Email"
                  value={email}
                  onChange={setEmail}
                  placeholder="Email"
                  required
                  error={errors.email}
                />
                <Input
                  type="text"
                  label="UserName"
                  value={username}
                  onChange={setUsername}
                  placeholder="Tên đăng nhập"
                  required
                  error={errors.username}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  value={password}
                  onChange={setPassword}
                  placeholder="Mật khẩu"
                  required
                  error={errors.password}
                />
                <Input
                  type="password"
                  label="comfirmPassword"
                  value={comfirmPassword}
                  onChange={setComfirmPassword}
                  placeholder="Xác nhận mật khẩu"
                  required
                  error={errors.comfirmPassword}
                />
              </div>

              <div className="flex flex-row items-center gap-1 mt-4">
                <Checkbox id="terms" defaultChecked />
                <label
                  htmlFor="terms"
                  className="text-[#1d1d1d] text-sm leading-normal cursor-pointer"
                >
                  Tôi đã đọc và đồng ý{" "}
                  <span className="text-blue-500 cursor-pointer hover:underline">
                    Điều khoản
                  </span>
                </label>
              </div>

              <Button className="w-full h-10 bg-[#f04406] hover:bg-[#e03d05] text-white uppercase font-medium mt-6 mb-5 opacity-90 hover:opacity-100">
                Đăng ký
              </Button>

              <div className="h-px bg-gray-300" />

              <div className="w-full flex flex-col justify-center items-center pt-5 gap-2">
                <p className="text-black m-0">Bạn đã có tài khoản</p>
                <Button
                  variant="secondary"
                  className="w-full h-10 bg-gray-400 hover:bg-gray-500 text-white uppercase font-medium"
                >
                  Đăng nhập ngay
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <div className="w-full max-w-[460px] flex flex-row items-center justify-end gap-5 mt-4">
            <div className="flex items-center gap-1 text-[#f04406] cursor-pointer hover:underline">
              <AlertCircle size={16} />
              <span>Báo lỗi</span>
            </div>

            <div className="flex items-center gap-1 text-[#f04406] cursor-pointer hover:underline">
              <FileText size={16} />
              <span>Điều khoản</span>
            </div>

            <div className="absolute right-0 flex items-center gap-1">
              <Shield size={14} />
              <span className="text-sm">Privacy - Teams</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
