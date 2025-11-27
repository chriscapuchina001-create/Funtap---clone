import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router";
import userIcon from "@assets/icons/download.svg";
import Input from "@/components/Input";
import Footer3 from "@/components/Footer3";
import ButtonApp from "@/components/Button";

type FormField = {
  key: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  group?: string;
};

const formFields: FormField[] = [
  { key: "username", label: "Họ và tên *", required: true },
  { key: "gender", label: "Giới tính *", required: true },
  { key: "province", label: "Tỉnh/TP *", required: true, group: "location" },
  { key: "district", label: "Quận/Huyện *", required: true, group: "location" },
  { key: "address", label: "Địa chỉ thường trú *", required: true },
  { key: "dateOfBirth", label: "Ngày sinh *", required: true },
  { key: "cccd", label: "CMT/CCCD/Hộ chiếu *", required: true },
  { key: "placeOfCccd", label: "Nơi cấp *", required: true },
  { key: "dateOfCccd", label: "Ngày cấp *", required: true },
];

const EditProfile: React.FC = () => {
  const location = useLocation();
  const { user } = location.state || {};

  const [formData, setFormData] = useState<Record<string, string>>(
    formFields.reduce((acc, field) => {
      acc[field.key] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
  };

  const handleDeleteAccount = () => {};

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full h-14 md:h-16 bg-[#f04308] sticky top-0 left-0 flex flex-row justify-center items-center shadow-md z-40 pr-2.5!">
        <div className="w-full max-w-[660px] flex flex-row justify-center items-center">
          <div className="w-full max-w-[660px] flex justify-start items-center gap-2 md:relative">
            <button
              onClick={() => window.history.back()}
              className="w-12 h-12 flex justify-center items-center no-underline md:absolute -left-12 cursor-pointer"
            >
              <ChevronLeft size={26} color="white" />
            </button>
            <h1 className="text-white leading-14 md:leading-16 text-xl font-roboto font-normal">
              Thông tin cá nhân
            </h1>
          </div>

          {user?.loginType === "email" ? (
            <p className="w-7 h-7 rounded-full bg-[#f8941e] text-white uppercase flex justify-center items-center font-poppins text-xs font-bold">
              G
            </p>
          ) : (
            <p className="w-7 h-7 rounded-full bg-blue-500 text-white uppercase flex justify-center items-center font-poppins text-xs font-bold">
              F
            </p>
          )}
        </div>
      </div>

      <div className="w-full max-w-[660px]">
        <div className="flex flex-row items-start justify-center gap-6 px-4! py-5! bg-[#F6F6F6]">
          <img src={userIcon} alt="User icon" className="w-[43px] h-[49px]" />
          <div className="flex flex-col pr-5!">
            <h3 className="font-roboto text-base font-medium text-[#212529]">
              Hoàn thiện thông tin cá nhân
            </h3>
            <p className="font-roboto text-sm font-normal text-[#777777]">
              Cập nhật thông tin cá nhân đầy đủ, kịp thời giúp bảo vệ tài khoản
              và được hỗ trợ nhanh chóng
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-white p-4! gap-5">
          <div>
            <p className="text-xs font-roboto font-normal text-[#0000008a] mb-1!">
              Họ và tên *
            </p>
            <Input
              label=""
              type="text"
              value={formData.username}
              onChange={(value) => handleInputChange("username", value)}
              required
              error={errors.username}
              inputClassName="py-0!"
            />
          </div>

          <div>
            <p className="text-xs font-roboto font-normal text-[#0000008a] mb-1!">
              Giới tính *
            </p>
            <Input
              label=""
              type="text"
              value={formData.gender}
              onChange={(value) => handleInputChange("gender", value)}
              required
              error={errors.gender}
              inputClassName="py-0!"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-roboto font-normal text-[#0000008a] mb-1!">
                Tỉnh/TP *
              </p>
              <Input
                label=""
                type="text"
                value={formData.province}
                onChange={(value) => handleInputChange("province", value)}
                required
                error={errors.province}
                inputClassName="py-0!"
              />
            </div>
            <div>
              <p className="text-xs font-roboto font-normal text-[#0000008a] mb-1!">
                Quận/Huyện *
              </p>
              <Input
                label=""
                type="text"
                value={formData.district}
                onChange={(value) => handleInputChange("district", value)}
                required
                error={errors.district}
                inputClassName="py-0!"
              />
            </div>
          </div>

          {["address", "dateOfBirth", "cccd", "placeOfCccd", "dateOfCccd"].map(
            (key) => (
              <div key={key}>
                <p className="text-xs font-roboto font-normal text-[#0000008a] mb-1!">
                  {formFields.find((f) => f.key === key)?.label}
                </p>
                <Input
                  label=""
                  type="text"
                  value={formData[key]}
                  onChange={(value) => handleInputChange(key, value)}
                  required
                  error={errors[key]}
                  inputClassName="py-0!"
                />
              </div>
            )
          )}

          <div className="flex flex-col gap-1.5 mt-1!">
            <ButtonApp
              type="submit"
              isLoading={isLoading}
              onClick={handleSubmit}
            >
              Thay đổi
            </ButtonApp>

            <ButtonApp
              type="button"
              isLoading={false}
              variant="secondary"
              onClick={handleDeleteAccount}
              className="text-[#1D1D3C]"
            >
              Xóa tài khoản
            </ButtonApp>
          </div>
        </div>
      </div>

      <Footer3 />
    </div>
  );
};

export default EditProfile;
