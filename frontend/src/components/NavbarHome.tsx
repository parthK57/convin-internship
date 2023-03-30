import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleModal } from "../slices/CreateBucketSlice";
import { toggleCardModal } from "../slices/CreateCardSlice";
import { bucketsArray, cardsArray } from "../pages/Home";
import { useSelector } from "react-redux";

const NavbarHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = localStorage.getItem("username")?.split(" ")[0];
  const [toggle, setToggle] = useState(false);
  const buckets: bucketsArray = useSelector(
    (state: any) => state.buckets.value
  );
  const cards: cardsArray = useSelector((state: any) => state.cards.value);
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
              onClick={() => navigate("/")}
              className="rounded-lg bg-amber-500 px-3 py-2 text-white"
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
            className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-indigo-800"
          >
            <span
              className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500"
              onClick={() => dispatch(toggleModal({ isActive: true }))}
            >
              Create Bucket
            </span>
            <span
              className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500"
              onClick={() => dispatch(toggleCardModal({ isActive: true }))}
            >
              Create Card
            </span>
            {buckets.map((bucket) => {
              return (
                <span className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500">
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
