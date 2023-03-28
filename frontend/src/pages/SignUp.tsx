import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col hidden h-[calc(100vh-70px)] items-center justify-center md:flex">
          <div className="h-[50%] w-[50%] overflow-hidden  bg-[url('https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg?w=740&t=st=1679991235~exp=1679991835~hmac=e95508798275b0280d6c2e8e1e3604beb6d31dc7d2730b441b544543eb2cd4a3')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="col flex h-[calc(100vh-70px)] items-center justify-center">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
