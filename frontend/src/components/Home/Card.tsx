import { BsCameraVideoFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { setModal } from "../../slices/ModalSlice";

type card = {
  Link: string;
}

const Card = ({ Link }: card) => {
  const isActive = useSelector((state: any) => state.modal.value.isActive);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setModal({ isActive: true, link: Link }));
  };
  return (
    <>
      <div
        className="col flex h-[200px] flex-col gap-2 overflow-hidden rounded-lg bg-indigo-100 p-2 shadow-sm transition-all ease-in-out hover:scale-105 hover:bg-indigo-200"
        onClick={openModal}
      >
        <div className="flex h-[70%] w-full items-center justify-center text-[50px] text-gray-800">
          <BsCameraVideoFill />
        </div>
        <div className="text-center">Life of Pi</div>
        <div className="text-center">Movie</div>
      </div>

      {isActive ? <Modal /> : null}
    </>
  );
};

export default Card;
