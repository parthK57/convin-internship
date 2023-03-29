import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { clear } from "../slices/ModalSlice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

  const iframeLink = useSelector(
    (state: any) => state.modal.value.link
  ).replace("watch?v=", "v/");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, left: -1000, scale: 0 }}
        animate={{ opacity: 1, left: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-white"
        onClick={() => dispatch(clear())}
      >
        <embed
          type="video/webm"
          src={`${iframeLink}`}
          className="h-[50%] w-[50%]"
        ></embed>
        <AiOutlineClose className="pointer-events-auto absolute top-0 right-0 mr-4 mt-4 cursor-pointer text-3xl text-red-600" />
      </motion.div>
    </>
  );
};

export default Modal;
