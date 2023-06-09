import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

// COMPONENTS
import { AiOutlineClose } from "react-icons/ai";
import BucketForm from "./BucketForm";

// SLICES
import { toggleModal } from "../../slices/CreateBucketSlice";

const CreateBucket = () => {
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, left: -1000, scale: 0 }}
        animate={{ opacity: 1, left: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-white"
      >
        <BucketForm />
        <AiOutlineClose onClick={() => dispatch(toggleModal({ isActive: false }))} className="pointer-events-auto absolute top-0 right-0 mr-4 mt-4 cursor-pointer text-3xl text-red-600" />
      </motion.div>
    </>
  );
};

export default CreateBucket;
