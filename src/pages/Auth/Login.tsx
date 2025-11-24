import Input from "@/components/Input";
import { useAuthStore } from "@/store/authStore";
import { Apple, Chromium, Facebook, Type } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from "@assets/logo/logo-funtap-white.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loginWithProvider } = useAuthStore();
  const providers = ["facebook", "google", "apple", "tiktok"] as const;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const newErrors = { username: "", password: "" };
    if (!username) newErrors.username = "Vui lòng nhập tài khoản";
    if (!password) newErrors.password = "Vui lòng nhập mật khẩu";

    setErrors(newErrors);

    if (newErrors.username || newErrors.password) {
      setIsLoading(false);
      return;
    }

    try {
      const randomId = Math.floor(
        100000000 + Math.random() * 900000000
      ).toString();

      const userData = {
        id: randomId,
        username: username,
        loginType: "email" as const,
        loginTime: new Date().toISOString(),
      };

      login(userData);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({
        username: "Đăng nhập thất bại",
        password: "Vui lòng kiểm tra lại thông tin",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleProviderLogin = (
    provider: "google" | "facebook" | "apple" | "tiktok"
  ) => {
    setIsLoading(true);

    try {
      const username = `user_${provider}_${Date.now()}`;

      loginWithProvider(username, provider);
      navigate("/");
    } catch (error) {
      console.error(`${provider} login failed:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-[#E5E5E5]">
      <div className="bg-[#f04f18] w-full h-64 flex justify-center pt-12!">
        <img src={logo} alt="logo" className="w-40 h-[55px]" />
      </div>
      <div className="w-full flex flex-row justify-center items-center relative">
        <div className="w-full max-w-[480px] absolute top-[-100px] px-2.5!">
          <div className="w-full bg-white flex flex-col items-center justify-center py-[25px]! px-[15px]! rounded-[6px] shadow-xl">
            <div className="w-full rounded-md px-[15px] pb-[25px]">
              <h2
                className="text-center text-black mb-10! mt-1!"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Đăng nhập
              </h2>
              <form className="flex flex-col gap-[30px]" onSubmit={handleLogin}>
                <Input
                  type="text"
                  label="Tài khoản"
                  value={username}
                  onChange={setUsername}
                  placeholder="E-Mail/Số điện thoại/Tên đăng nhập"
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

                <div className="mt-3!">
                  <button
                    type="submit"
                    className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#f04406] uppercase cursor-pointer ${
                      isLoading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#e03d05]"
                    }`}
                  >
                    {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                  </button>
                </div>
              </form>
              <div className="flex flex-col items-center mt-4!">
                <div>
                  <p
                    className="text-center mb-4.5! text-[#61616a]"
                    style={{
                      fontSize: 15,
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Hoặc đăng nhập bằng
                  </p>
                  <div className="flex gap-3 justify-center">
                    {providers.map((provider) => (
                      <button
                        key={provider}
                        onClick={() => handleProviderLogin(provider)}
                        disabled={isLoading}
                        className="flex flex-col items-center gap-2 w-[65px] cursor-pointer"
                      >
                        {provider === "facebook" && (
                          <Facebook
                            width={50}
                            height={50}
                            className="bg-gray-200 rounded-full p-1"
                          />
                        )}
                        {provider === "google" && (
                          <Chromium
                            width={50}
                            height={50}
                            className="bg-gray-200 rounded-full p-1"
                          />
                        )}
                        {provider === "apple" && (
                          <Apple
                            width={50}
                            height={50}
                            className="bg-gray-200 rounded-full p-1"
                          />
                        )}
                        {provider === "tiktok" && (
                          <Type
                            width={50}
                            height={50}
                            className="bg-gray-200 rounded-full p-1"
                          />
                        )}
                        <p
                          className="text-[#212121] capitalize"
                          style={{
                            fontSize: 15,
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {provider}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-7! w-full flex justify-between mb-[15px]!">
                  <button
                    onClick={() => navigate("/register")}
                    className="cursor-pointer"
                  >
                    <p
                      className="text-[#212121]"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        fontSize: 14,
                      }}
                    >
                      Đăng ký mới
                    </p>
                  </button>
                  <button
                    onClick={() => navigate("/password-reset")}
                    className="cursor-pointer"
                  >
                    <p
                      className="text-[#212121]"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        fontSize: 14,
                      }}
                    >
                      Quên mật khẩu?
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-end items-center mt-5! pr-2">
            <button className="cursor-pointer">
              <p
                className="text-[#f04406] hover:underline"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Báo lỗi
              </p>
            </button>
            <button className="cursor-pointer">
              <p
                className="text-[#f04406] hover:underline"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Điều khoản
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
