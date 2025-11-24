import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/CardRegister";
import { Checkbox } from "@/components/Checkbox";
import Input from "@/components/Input";
import { useState } from "react";
import { useNavigate } from "react-router";
import primacyLogo from "@assets/icons/logo_48.png";
import logo from "@assets/logo/logo-funtap-white.png";

type FormErrors = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };

    if (!email) newErrors.email = "Email là bắt buộc";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email không hợp lệ";

    if (!username) newErrors.username = "Tên đăng nhập là bắt buộc";
    else if (username.length < 3)
      newErrors.username = "Tên đăng nhập phải có ít nhất 3 ký tự";

    if (!password) newErrors.password = "Mật khẩu là bắt buộc";
    else if (password.length < 6)
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";

    if (!confirmPassword)
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", {
        email,
        username,
        password,
        confirmPassword,
      });
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    if (errors.username) setErrors((prev) => ({ ...prev, username: "" }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (errors.confirmPassword)
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
  };

  return (
    <div className="w-full h-screen bg-[#E5E5E5]">
      <div className="bg-[#f04f18] w-full h-64 flex justify-center pt-12!">
        <img src={logo} alt="logo" className="w-40 h-[55px]" />
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center relative">
        <div className="w-full max-w-[480px] absolute -top-24 px-2.5!">
          <Card className="w-full bg-white flex flex-col items-center justify-center rounded-[6px] shadow-xl">
            <CardContent className="p-0 w-full">
              <form onSubmit={handleSubmit}>
                <h2
                  className="text-center text-black pt-[25px]! pb-[35px]!"
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Đăng ký
                </h2>

                <div className="px-[15px]! flex flex-col gap-7">
                  <Input
                    type="text"
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    required
                    error={errors.email}
                  />
                  <Input
                    type="text"
                    label="UserName"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Tên đăng nhập"
                    required
                    error={errors.username}
                  />
                  <Input
                    type="password"
                    label="Mật khẩu"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Mật khẩu"
                    required
                    error={errors.password}
                  />
                  <Input
                    type="password"
                    label="comfirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Xác nhận mật khẩu"
                    required
                    error={errors.confirmPassword}
                  />
                </div>

                <div className="px-[15px]! flex flex-row items-center gap-1 mt-5!">
                  <Checkbox
                    id="terms"
                    defaultChecked
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-[#1d1d1d] cursor-pointer"
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    Tôi đã đọc và đồng ý{" "}
                    <span className="text-[#2196f3] cursor-pointer hover:underline">
                      Điều khoản
                    </span>
                  </label>
                </div>

                <div className="px-[15px]!">
                  <Button
                    className={`w-full h-10 text-white uppercase font-medium mt-6.5 mb-5 cursor-pointer ${
                      isChecked
                        ? "bg-[#f04406] hover:bg-[#e03d05] opacity-90 hover:opacity-100"
                        : "bg-[#f04406] cursor-not-allowed"
                    }`}
                    disabled={!isChecked}
                  >
                    Đăng ký
                  </Button>
                </div>
              </form>

              <div className="h-px bg-[#0000001f]" />

              <div className="w-full flex flex-col justify-center items-center pb-[25px]! gap-2.5 mt-5!">
                <p
                  className="text-black m-0"
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Bạn đã có tài khoản
                </p>
                <div className="px-[15px]! w-full">
                  <Button
                    onClick={handleLoginRedirect}
                    variant="secondary"
                    className="w-full h-10 bg-gray-400 hover:bg-gray-500 text-white uppercase font-medium cursor-pointer"
                  >
                    Đăng nhập ngay
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="w-full flex flex-row items-center justify-end gap-5 mt-4! pr-3!">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span
                className="text-[#f04406]"
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Báo lỗi
              </span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span
                className="text-[#f04406]"
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Điều khoản
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-5 flex flex-col items-center gap-1 bg-[#F9F9F9] px-2! py-1! rounded-[2px] shadow-lg">
        <img src={primacyLogo} alt="primacyLogo" className="w-10 h-10" />
        <span
          className="text-[#555]"
          style={{
            fontSize: 8,
            fontWeight: 400,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Privacy - Teams
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
