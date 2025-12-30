import ResetYourPassword from "../../components/ResetYourPassword";
import { forgotPassword } from "../../services/api/auth";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendLink = async () => {
    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Email không đúng định dạng");
      return;
    }
    setLoading(true);
    try {
      await forgotPassword({ email });
      alert("Link đổi mật khẩu đã được gửi");
    } catch (error) {
      alert("Gửi email thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResetYourPassword
      email={email}
      setEmail={setEmail}
      handleSendLink={handleSendLink}
      loading={loading}
    />
  );
};

export default ForgotPasswordPage;
