import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// COMPONENTS
import { bucketsArray } from "../pages/Home";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// SLICES
import { toggleCardModal } from "../slices/CreateCardSlice";
import { toggleModal } from "../slices/CreateBucketSlice";
import { setBuckets } from "../slices/BucketsSlice";
import { setCards } from "../slices/CardsSlice";
import { setBucket } from "../slices/ActiveBucketSlice";
import { setState } from "../slices/HistorySlice";

const NavbarHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = localStorage.getItem("username")?.split(" ")[0];
  const [toggle, setToggle] = useState(false);
  const buckets: bucketsArray = useSelector(
    (state: any) => state.buckets.value
  );
  const logoutUser = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    dispatch(setBuckets([]));
    dispatch(setCards([]));
    navigate("/");
  };

  return (
    <>
      <div className="w relative flex h-[70px] w-screen items-center justify-between bg-indigo-800 px-10 text-white">
        <div className="text-2xl">
          <Link to="/aboutus">Convin</Link>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <span className="text-lg">Hello, {`${user}`}!</span>
          <span>
            <button
              onClick={logoutUser}
              className="rounded-lg bg-amber-500 px-3 py-2 text-white hover:bg-amber-400"
            >
              Logout
            </button>
          </span>
        </div>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.17 }}
            className="absolute top-0 left-0 z-30 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-indigo-800"
          >
            <span
              className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500"
              onClick={() => {
                dispatch(toggleModal({ isActive: true }));
                setToggle(!toggle);
              }}
            >
              Create Bucket
            </span>
            <span
              className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500"
              onClick={() => {
                dispatch(toggleCardModal({ isActive: true }));
                setToggle(!toggle);
              }}
            >
              Create Card
            </span>
            <span
              className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500"
              onClick={() => {
                dispatch(setState(true));
                setToggle(!toggle);
              }}
            >
              History
            </span>
            {buckets.map((bucket, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    dispatch(setBucket(bucket.bucket_name));
                    setToggle(!toggle);
                  }}
                  className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500"
                >
                  {bucket.bucket_name}
                </span>
              );
            })}
            <span className="pointer-events-auto cursor-pointer text-2xl transition-all duration-300 ease-in hover:scale-105">
              <AiOutlineClose onClick={() => setToggle(!toggle)} />
            </span>
          </motion.div>
        )}
        <div className="md:hidden">
          <span className="pointer-events-auto cursor-pointer text-2xl">
            <RxHamburgerMenu onClick={() => setToggle(!toggle)} />
          </span>
        </div>
      </div>
    </>
  );
};

export default NavbarHome;
