import { BsCameraVideoFill } from "react-icons/bs";

const Card = () => {
  return (
    <>
      <div className="col flex h-[200px] flex-col gap-2 overflow-hidden rounded-lg bg-amber-50 p-2 shadow-sm">
        <div className="flex h-[70%] w-full items-center justify-center text-[50px] text-gray-800">
          <BsCameraVideoFill />
        </div>
        <div className="text-center">Life of Pi</div>
        <div className="text-center">Movie</div>
        <div className="hidden top-0 left-0 flex h-screen w-screen items-center justify-center bg-white/25">
          Wassup
          {/* // TODO: CREATE IFRAME, PROVIDE LINK DETAILS WITH REDUX EZ */}
        </div>
      </div>
    </>
  );
};

export default Card;
