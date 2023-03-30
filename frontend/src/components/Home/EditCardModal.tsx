import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { clear } from "../../slices/ModalSlice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { clearEditCardModal } from "../../slices/EditCardModalSlice";
import { useState } from "react";
import axios from "axios";

const EditCardModal = () => {
  const dispatch = useDispatch();
  const cardName: string = useSelector(
    (state: any) => state.editCardModal.value.cardName
  );
  const bucketName: string = useSelector(
    (state: any) => state.editCardModal.value.bucketName
  );
  const cardId: string = useSelector(
    (state: any) => state.editCardModal.value.cardId
  );
  const [name, setName] = useState(cardName);
  const [bucket, setBucket] = useState(bucketName);
  const buckets = useSelector((state: any) => state.buckets.value);

  const updateCard = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:5000/cards/update",
        headers: {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
        data: {
          name: name,
          bucketName: bucket,
          cardId: cardId,
        },
      });
      if (resp.status === 200) {
        alert("Card update successfuly!");
        dispatch(clearEditCardModal());
        window.location.reload();
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, right: -1000, scale: 0 }}
        animate={{ opacity: 1, right: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-white"
        onClick={() => dispatch(clear())}
      >
        <form
          autoComplete="off"
          className="flex w-[320px] flex-col gap-1 overflow-hidden rounded-3xl bg-indigo-50 pb-5 shadow-md"
        >
          <div className="flex h-[80px] items-center justify-center shadow-sm">
            <div className="text-2xl">Edit Card</div>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <label>Name :</label>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
              type="text"
              className="rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <label>Bucket :</label>
            <select
              onChange={(e) => setBucket(e.target.value)}
              className="rounded-md bg-white px-2 py-2"
            >
              <option value={bucket}>{bucket}</option>
              {buckets.map((bucket: any) => {
                if (bucket.bucket_name !== bucketName)
                  return (
                    <option value={bucket.bucket_name}>
                      {bucket.bucket_name}
                    </option>
                  );
              })}
            </select>
          </div>
          <div className="mt-4 flex items-center justify-start gap-6 px-4">
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-3 py-2 text-white transition-all ease-in-out hover:bg-green-500"
              onClick={updateCard}
            >
              Submit
            </button>
            <div
              className="pointer-events-auto cursor-pointer"
              onClick={() => dispatch(clearEditCardModal())}
            >
              Cancel
            </div>
          </div>
        </form>
        <AiOutlineClose
          onClick={() => dispatch(clearEditCardModal())}
          className="pointer-events-auto absolute top-0 right-0 mr-4 mt-4 cursor-pointer text-3xl text-red-600"
        />
      </motion.div>
    </>
  );
};

export default EditCardModal;
