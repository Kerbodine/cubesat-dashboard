import { useState } from "react";
import { BiHide, BiInfoCircle, BiShow, BiLoaderAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ReactComponent as GoogleIcon } from "../svg/google.svg";

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signup, signInWithGoogle } = useAuth();

  const googleAuth = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(email, password, firstName, lastName);
      setLoading(false);
      navigate("/");
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/weak-password":
          setError("Password must be at least 6 characters");
          break;
        default:
          setError("Failed to signup");
      }
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-white grid place-items-center">
      <div className="border-gray-200 p-8 xs:border-2 rounded-2xl">
        <form className="w-[240px] relative" onSubmit={handleSubmit}>
          <h1 className="text-2xl xs:text-3xl font-semibold mb-4">Sign up</h1>
          <button
            type="button"
            onClick={googleAuth}
            className="h-9 px-2 font-medium text-sm gap-2 flex items-center rounded-lg hover:border-gray-400 text-gray-600 w-full border-2 border-gray-200"
          >
            <span className="text-base">
              <GoogleIcon />
            </span>
            Continue with Google
          </button>
          <div className="my-2 w-full flex items-center">
            <div className="flex-auto h-0.5 bg-gray-200"></div>
            <p className="mx-2 text-xs font-bold text-gray-500">OR</p>
            <div className="flex-auto h-0.5 bg-gray-200"></div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First name"
              className="mb-2 focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-400 text-gray-700"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="mb-2 focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-400 text-gray-700"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="mb-2 focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-400 text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-400 text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="-ml-7 text-xl text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </button>
          </div>
          {error && (
            <div className="w-full p-0.5 text-red-400 rounded-lg flex text-sm font-medium gap-1 bg-red-100 border-2 border-red-400 mt-2">
              <BiInfoCircle className="rotate-180 text-xl flex-none" />
              <p className="flex-auto truncate">{error}</p>
            </div>
          )}
          <button
            type="submit"
            className="mt-8 px-2 py-1 text-sm rounded-lg border-gray-600 border-2 text-gray-700 font-medium hover:bg-gray-600 hover:text-white"
          >
            Sign up →
          </button>
          <p className="mt-2 text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline font-medium text-gray-700"
            >
              Log in
            </Link>
          </p>
          {loading && (
            <div className="absolute inset-0 bg-white grid place-items-center">
              <span className="animate-spin text-2xl text-gray-500">
                <BiLoaderAlt />
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
