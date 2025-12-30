import Login from "../../components/Login";
import { login } from "../../services/api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import axios from "axios";
const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      alert("Email và password không được để trống");
      setLoading(false);
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Email không đúng định dạng");
      return;
    }
    try {
      await login({ email, password });
      navigate("/dashboard");
      setLoading(false);
    } catch (error) {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const handleLoginGoogle = async () => {
    try {
      // 1. Login với Firebase UI
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      console.log("1. Đã lấy được Firebase Token");

      // 2. Gửi token xuống Backend xác thực
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/google-login`,
        {
          token: idToken,
        }
      );

      // 3. Gọi hàm callback của cha để lưu user và token
      console.log("2. Backend xác thực thành công");
      // onLoginSuccess(res.data); // data gồm { user, token }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      alert("Đăng nhập thất bại!");
    }
  };
  return (
    <>
      <Login
        handleLogin={handleLogin}
        loading={loading}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLoginGoogle={handleLoginGoogle}
      />
    </>
  );
};

export default LoginPage;
