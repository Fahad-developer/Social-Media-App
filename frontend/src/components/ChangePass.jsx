import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../redux/auth/changepasswordSlice";

export default function ChangePass() {
  const dispatch = useDispatch()

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      password,
      confirmPassword
    }

    dispatch(changePassword(formData))


  };

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded p-6 shadow-sm mt-8">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Old password */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your new password"
            required
          />
        </div>

        {/* New password */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Confirm your new password"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}
