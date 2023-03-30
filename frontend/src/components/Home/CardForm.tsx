import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { toggleCardModal } from "../../slices/CreateCardSlice";
import { useSelector } from "react-redux";

const CardForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [bucket, setBucket] = useState("");
  const [link, setLink] = useState("");
  const buckets = useSelector((state: any) => state.buckets.value);

  const uploadCard = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:5000/cards",
        headers: {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
        data: {
          card_name: name,
          bucket_name: bucket,
          link: link,
        },
      });
      if (resp.status === 201) {
        dispatch(toggleCardModal({ isActive: false }));
        alert("Success!");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <>
      <form
        autoComplete="off"
        className="flex w-[320px] flex-col gap-1 overflow-hidden rounded-3xl bg-indigo-50 pb-5 shadow-md"
      >
        <div className="flex h-[80px] items-center justify-center shadow-sm">
          <div className="text-2xl">Create Card</div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <label>Name :</label>
          <input
            onChange={(e) => setName(e.target.value)}
            required
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
            <option value="">Not Selected</option>
            {buckets.map((bucket: any) => {
              return (
                <option value={bucket.bucket_name}>{bucket.bucket_name}</option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <label>Link :</label>
          <input
            onChange={(e) => setLink(e.target.value)}
            required
            type="text"
            className="rounded-md px-2 py-1"
          />
        </div>
        <div className="mt-4 flex items-center justify-start gap-6 px-4">
          <button
            onClick={uploadCard}
            type="submit"
            className="rounded-lg bg-indigo-600 px-3 py-2 text-white transition-all ease-in-out hover:bg-green-500"
          >
            Submit
          </button>
          <div
            className="pointer-events-auto cursor-pointer"
            onClick={() => dispatch(toggleCardModal({ isActive: false }))}
          >
            Cancel
          </div>
        </div>
      </form>
    </>
  );
};

export default CardForm;
