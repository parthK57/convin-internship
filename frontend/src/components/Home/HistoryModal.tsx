import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { pushHistory, setState } from "../../slices/HistorySlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setModal } from "../../slices/ModalSlice";
import TimeStamp from "../TimeStamp";

// TYPES
interface history {
  cardName: string;
  link: string;
  bucketName: string;
  timestamp: string;
}
type historyArray = Array<history>;

const HistoryModal = () => {
  const dispatch = useDispatch();
  const history: historyArray = useSelector(
    (state: any) => state.history.value
  );
  return (
    <>
      <motion.div
        initial={{ opacity: 0, left: -1000, scale: 0 }}
        animate={{ opacity: 1, left: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-white"
      >
        <table className="w-[100%] border border-black bg-indigo-50 md:w-[90%]">
          <tr className="border-b border-black bg-indigo-700 text-lg text-white">
            <th className="w-[10%] border-r border-black">Sr No.</th>
            <th className="w-[35%] border-r border-black">Card Name</th>
            <th className="w-[35%] border-r border-black">Bucket Name</th>
            <th>Timestamp</th>
          </tr>
          {history.map((card, index) => {
            if (card.cardName !== "") {
              return (
                <tr
                  onClick={() => {
                    dispatch(setModal({ isActive: true, link: card.link }));
                    dispatch(
                      pushHistory({
                        cardName: card.cardName,
                        link: card.link,
                        bucketName: card.bucketName,
                        timestamp: TimeStamp(),
                      })
                    );
                  }}
                  className="pointer-events-auto cursor-pointer border-b border-black bg-indigo-200"
                >
                  <td className="w-[10%] border-r border-black px-2 transition-all duration-300 ease-in-out hover:bg-amber-400">
                    {index}
                  </td>
                  <td className="w-[35%] border-r border-black px-2 transition-all duration-300 ease-in-out hover:bg-amber-400">
                    {card.cardName}
                  </td>
                  <td className="w-[35%] border-r border-black px-2 transition-all duration-300 ease-in-out hover:bg-amber-400">
                    {card.bucketName}
                  </td>
                  <td className="px-2 transition-all duration-300 ease-in-out hover:bg-amber-400">
                    {card.timestamp}
                  </td>
                </tr>
              );
            }
          })}
        </table>
        {history.length === 1 ? (
          <span className="mt-2 text-center text-2xl">No Data</span>
        ) : null}
        <AiOutlineClose
          onClick={() => dispatch(setState(false))}
          className="pointer-events-auto absolute top-0 right-0 mr-4 mt-4 cursor-pointer text-3xl text-red-600"
        />
      </motion.div>
    </>
  );
};

export default HistoryModal;
