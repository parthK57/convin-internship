import Card from "../components/Card";
import { FaHistory } from "react-icons/fa";
import NavbarHome from "../components/NavbarHome";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <div className="flex h-[calc(100vh-70px)] w-screen justify-between">
        <div className="hidden flex-col items-center justify-between bg-purple-100 pb-10 shadow-sm sm:flex sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[19%]">
          <div
            id="buckets"
            className="mt-20 flex w-[90%] flex-col overflow-hidden rounded-lg bg-yellow-100"
          >
            <div className="rounded-md bg-amber-200 p-4 text-center text-xl shadow-sm">
              Buckets
            </div>
            <div className="flex h-[225px] flex-col justify-center overflow-y-scroll">
              <span className="flex px-5 py-2 text-base">Create Bucket</span>
              <span className="flex px-5 py-2 text-base">Create Card</span>
              <span className="flex px-5 py-2 text-base">Sports</span>
              <span className="flex px-5 py-2 text-base">Education</span>
              <span className="flex px-5 py-2 text-base">Music</span>
            </div>
          </div>
          <span className="pointer-events-auto flex cursor-pointer items-center gap-3 px-5 py-2 text-base">
            History
            <FaHistory className="text-lg text-amber-500" />
          </span>
        </div>
        <div className="grid-col-1 grid w-[100%] gap-5 overflow-y-scroll p-20 sm:grid-cols-2 md:w-[75%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
