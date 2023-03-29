import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = (e: any) => {
    e.preventDefault();
    try {
      // TODO: CREATE AXIOS POST REQ
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      console.log(email, password);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        className="flex w-[340px] flex-col gap-1 overflow-hidden rounded-3xl bg-indigo-50 pb-5 shadow-md sm:w-[50%] md:w-[69%] lg:w-[70%] xl:w-[47%]"
      >
        <div className="flex h-[80px] items-center justify-center shadow-sm">
          <div className="text-2xl">Login</div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <label>Email :</label>
          <input
            required
            type="email"
            className="rounded-md px-2 py-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 px-4">
          <label>Password :</label>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="rounded-md px-2 py-1"
          />
        </div>
        <div className="mt-4 flex items-center justify-start gap-6 px-4">
          <button
            type="submit"
            onClick={loginUser}
            className="rounded-lg bg-indigo-600 px-3 py-2 text-white transition-all ease-in-out hover:bg-green-500"
          >
            Submit
          </button>
          <div
            onClick={() => navigate("/signup")}
            className="pointer-events-auto cursor-pointer"
          >
            Create Account
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
