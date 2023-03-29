import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const signUpUser = async (e: any) => {
    e.preventDefault();
    // TODO: CREATE AXIOS POST REQ
    try {
      if (confirmPassword !== password)
        throw new Error("Passwords do not match!");
      else {
        const { status } = await axios({
          method: "post",
          url: "http://localhost:5000/users/signup",
          data: {
            name,
            email,
            password: confirmPassword,
          },
        });
        if (status === 201) navigate("/");
      }
    } catch (error: any) {
      alert(error.response.message);
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        className="flex w-[340px] flex-col gap-1 overflow-hidden rounded-3xl bg-indigo-50 pb-5 shadow-md sm:w-[50%] md:w-[69%] lg:w-[70%] xl:w-[47%]"
      >
        <div className="flex h-[80px] items-center justify-center shadow-sm">
          <div className="text-2xl">Sign Up</div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <label>Name :</label>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="rounded-md px-2 py-1"
          />
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
        <div className="flex flex-col gap-2 px-4">
          <label>Retype Password :</label>
          <input
            required
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-md px-2 py-1"
          />
        </div>
        <div className="mt-4 flex justify-start gap-6 px-4">
          <button
            type="submit"
            onClick={signUpUser}
            className="rounded-lg bg-indigo-600 px-3 py-2 text-white transition-all ease-in-out hover:bg-green-500"
          >
            Submit
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-[#e02d51] px-3 py-2 text-white hover:bg-[#e24363]"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
