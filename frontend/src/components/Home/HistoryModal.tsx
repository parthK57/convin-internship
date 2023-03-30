import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { setState } from "../../slices/HistorySlice";
import { useDispatch } from "react-redux";

const HistoryModal = () => {
  const dispatch = useDispatch();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, left: -1000, scale: 0 }}
        animate={{ opacity: 1, left: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-white"
      >
        <table className="w-[100%] border border-black md:w-[90%]">
          <tr>
            <th className="border-r border-black w-[10%]">Sr No.</th>
            <th className="border-r border-black w-[35%]">Card Name</th>
            <th className="border-r border-black w-[35%]">Bucket Name</th>
            <th>Timestamp</th>
          </tr>
          {/* //TODO: CREATE HISTORY TABLE, DESIGN BACKEND FOR THAT, MAP THE HISTORY, PUSH HISTORY ON EVERY CARD CLICK & GET PREV HISTORY WHEN USER LOGS IN */}
        </table>
        <AiOutlineClose
          onClick={() => dispatch(setState(false))}
          className="pointer-events-auto absolute top-0 right-0 mr-4 mt-4 cursor-pointer text-3xl text-red-600"
        />
      </motion.div>
    </>
  );
};

export default HistoryModal;
