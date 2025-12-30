import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = ({
  email,
  setEmail,
  handleSendLink,
  loading
}) => {
  return (
    <div className="min-h-screen bg-[#faf7f6] flex flex-col">
      <header className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-red-500">⛨</span>
          <span>AuthFlow</span>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-600 hover:text-black">
            Help
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Contact Support
          </a>
          <Link to="/login" className="rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition">
            Login
          </Link>
        </div>
      </header>
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <span className="text-2xl text-red-500">🔒</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Reset your password
          </h2>

          <p className="mt-2 text-gray-500 text-sm">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>

          <div className="mt-6 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              ✉️
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full border border-gray-300 py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <button
            onClick={handleSendLink}
            disabled={loading}
            className="mt-6 w-full rounded-full bg-red-500 py-3 font-semibold text-white hover:bg-red-600 transition disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="mt-6">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

