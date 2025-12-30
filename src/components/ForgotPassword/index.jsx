import React from "react";
const ResetPassword = ({
  onSubmit,
  loading,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  return (
    <div className="min-h-screen bg-[#faf7f6] flex flex-col">
      <header className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-red-500">⛨</span>
          <span>AuthFlow</span>
        </div>
      </header>
      <div className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <span className="text-2xl text-red-500">🔐</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Create new password
          </h2>

          <p className="mt-2 text-gray-500 text-sm">
            Your new password must be different from previously used passwords.
          </p>
          <div className="mt-6 text-left">
            <label className="text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="mt-2 w-full rounded-full border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="mt-4 text-left">
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="mt-2 w-full rounded-full border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-full bg-red-500 py-3 font-semibold text-white hover:bg-red-600 transition"
          >
            {loading ? "Saving..." : "Set New Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
