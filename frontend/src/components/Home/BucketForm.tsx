import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

// SLICES
import { toggleModal } from "../../slices/CreateBucketSlice";

const BucketForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const uploadBucket = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:5000/buckets",
        headers: {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
        data: {
          name,
        },
      });
      if (resp.status === 201) {
        alert("Success!");
        dispatch(toggleModal(toggleModal({ isActive: false })));
      } else console.log(resp);
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
          <div className="text-2xl">Create Bucket</div>
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
        <div className="mt-4 flex items-center justify-start gap-6 px-4">
          <button
            onClick={uploadBucket}
            type="submit"
            className="rounded-lg bg-indigo-600 px-3 py-2 text-white transition-all ease-in-out hover:bg-green-500"
          >
            Submit
          </button>
          <div
            className="pointer-events-auto cursor-pointer"
            onClick={() =>
              dispatch(toggleModal(toggleModal({ isActive: false })))
            }
          >
            Cancel
          </div>
        </div>
      </form>
    </>
  );
};

export default BucketForm;
