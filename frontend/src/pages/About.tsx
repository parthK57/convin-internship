import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col hidden h-[calc(100vh-70px)] items-center justify-center md:flex">
          <div className="h-[50%] w-[50%] overflow-hidden bg-[url('https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg?w=740&t=st=1679991235~exp=1679991835~hmac=e95508798275b0280d6c2e8e1e3604beb6d31dc7d2730b441b544543eb2cd4a3')] bg-cover bg-center bg-no-repeat transition-all ease-in-out hover:scale-105"></div>
        </div>
        <div className="col flex h-[calc(100vh-70px)] items-center justify-center">
          <div className=" flex flex-col p-4 bg-indigo-50 hover:shadow-md rounded-md hover:scale-105 transition-all ease-in-out hover:bg-indigo-50 w-[90%]">
            <h1 className="text-3xl font-semibold">About Us</h1>
            <span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                tenetur impedit debitis veritatis, earum maxime magni sunt
                ipsum! Beatae iusto ipsam aperiam ipsum. Vel voluptatum aut
                illum perferendis perspiciatis in.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                tenetur impedit debitis veritatis, earum maxime magni sunt
                ipsum! Beatae iusto ipsam aperiam ipsum. Vel voluptatum aut
                illum perferendis perspiciatis in.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
