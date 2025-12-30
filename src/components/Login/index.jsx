import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";

const Login = ({
  handleLogin,
  handleLoginGoogle,
  loading,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-black via-[#2b1a1a] to-black text-white p-12">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Lumina UI</span>
        </div>

        <div>
          <h1 className="text-4xl font-bold leading-tight">
            Capturing the Essence of <br /> Modern Aesthetics.
          </h1>
          <p className="mt-4 text-gray-300 max-w-md">
            Join thousands of designers building the future of the web with our
            intuitive tools.
          </p>
        </div>

        <div className="text-sm text-gray-400 flex gap-4">
          <span>© 2023 Lumina Inc.</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#faf7f6] px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">
            Please enter your details to sign in.
          </p>
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@company.com"
              className="mt-2 w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-red-500" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-red-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            onClick={() => handleLogin()}
            className="mt-6 w-full rounded-full bg-red-500 py-3 text-white font-semibold hover:bg-red-600 transition"
            disabled={loading}
          >
            Sign In
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner /> Logging in...
              </div>
            ) : (
              "Đăng nhập"
            )}
          </button>

          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-4 text-xs text-gray-500">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 rounded-full border border-gray-300 py-3 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span
              onClick={() => handleLoginGoogle()}
              className="text-gray-700 font-medium"
            >
              Sign in with Google
            </span>
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?
            <Link to="/register" className="ml-1 text-red-500 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
