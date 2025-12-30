import ResetPassword from "../../components/ForgotPassword";
import { resetPassword } from "@/services/api/auth";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Token không hợp lệ");
      return;
    }
    if (!password || !confirmPassword) {
      alert("Không được để trống mật khẩu");
      return;
    }

    if (password.length < 8) {
      alert("Mật khẩu tối thiểu 8 ký tự");
      return;
    }
    if (!/\d/.test(password)) {
      alert("Mật khẩu phải chứa số");
      return;
    }
    if (!/[a-zA-Z]/.test(password)) {
      alert("Mật khẩu phải chứa chữ cái");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    setLoading(true);
    try {
      await resetPassword(token, {
        password,
      });

      alert("Đổi mật khẩu thành công");
      navigate("/login");
    } catch (error) {
      alert("Đổi mật khẩu thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResetPassword
      password={password}
      confirmPassword={confirmPassword}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      loading={loading}
      onSubmit={handleResetPassword}
    />
  );
};

export default ResetPasswordPage;
