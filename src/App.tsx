import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ForgotPassword from "@pages/Auth/ForgotPassword";
import LoginPage from "@pages/Auth/Login";
import RegisterPage from "@pages/Auth/Register";
import NotFoundPage from "@pages/NotFound/NotFoundPage";
import PaymentPage from "@pages/Home/PaymentPage";
import GiftcodePage from "@pages/Home/GiftcodePage";
import SupportPage from "@pages/Home/SupportPage";
import ProfilePage from "@pages/Home/ProfilePage";
import HomePage from "@pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/playfun" element={<HomePage />} />
        <Route path="/gifcode" element={<GiftcodePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/account" element={<ProfilePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password-reset" element={<ForgotPassword />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
