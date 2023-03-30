import { BsCameraVideoFill, BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { setModal } from "../../slices/ModalSlice";
import { useState } from "react";
import axios from "axios";
import { addCard, removeCard } from "../../slices/DeleteCardsSlice";

const Card = ({ data }: any) => {
  const isActive = useSelector((state: any) => state.modal.value.isActive);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setModal({ isActive: true, link: data.link }));
  };
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [borderStatus, setBorderStatus] = useState("border-none");

  const deleteCard = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await axios({
        method: "delete",
        url: "http://localhost:5000/cards/card",
        headers: {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
          id: data.id,
        },
      });
      if (resp.status === 200) {
        alert("Card deleted successfuly!");
        window.location.reload();
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <div
        className={`col relative flex h-[200px] flex-col gap-2 overflow-hidden rounded-lg border border-blue-500 bg-indigo-100 p-2 shadow-sm transition-all ease-in-out hover:scale-105 hover:bg-indigo-200 ${borderStatus}`}
      >
        <div className="flex h-[70%] w-full items-center justify-center text-[50px] text-gray-800">
          <BsCameraVideoFill onClick={openModal} />
        </div>
        <div className="text-center">{data.card_name}</div>
        <div className="text-center">{data.bucket_name}</div>
        <BsThreeDotsVertical
          className="absolute right-0 mt-2 mr-2"
          onClick={() => setToggleDropDown(!toggleDropDown)}
        />
        {toggleDropDown && (
          <div className="absolute z-10 mt-8 flex w-[90%] flex-col rounded-md bg-white">
            <span className="border-b p-1 px-3 text-sm hover:text-amber-400">
              Edit
            </span>
            <span
              className="border-b p-1 px-3 text-sm hover:text-red-600"
              onClick={deleteCard}
            >
              Delete
            </span>
            <span
              className="border-b p-1 px-3 text-sm hover:text-indigo-600"
              onClick={() => {
                if (borderStatus === "border-none") {
                  dispatch(addCard(data.id));
                  setBorderStatus("");
                } else if (borderStatus === "") {
                  dispatch(removeCard(data.id));
                  setBorderStatus("border-none");
                }
                setToggleDropDown(!toggleDropDown);
              }}
            >
              Select
            </span>
          </div>
        )}
      </div>
      {isActive ? <Modal /> : null}
    </>
  );
};

export default Card;
