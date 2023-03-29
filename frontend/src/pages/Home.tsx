import Card from "../components/Home/Card";
import { FaHistory } from "react-icons/fa";
import NavbarHome from "../components/NavbarHome";
import { useDispatch } from "react-redux";
import { toggleModal } from "../slices/CreateBucketSlice";
import { useSelector } from "react-redux";
import CreateBucket from "../components/Home/CreateBucket";
import CreateCard from "../components/Home/CreateCard";
import { toggleCardModal } from "../slices/CreateCardSlice";

const Home = () => {
  const dispatch = useDispatch();
  const createBucketModalStatus = useSelector(
    (state: any) => state.createBucketModal.value.isActive
  );
  const createCardModalStatus = useSelector(
    (state: any) => state.card.value.isActive
  );
  
  return (
    <>
      <NavbarHome />
      <div className="flex h-[calc(100vh-70px)] w-screen justify-between">
        <div className="hidden flex-col items-center justify-between bg-indigo-100 pb-10 shadow-sm sm:flex sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[19%]">
          <div
            id="buckets"
            className="mt-20 flex w-[90%] flex-col overflow-hidden rounded-lg bg-indigo-200"
          >
            <div className="rounded-md bg-indigo-300 p-4 text-center text-xl shadow-sm">
              Buckets
            </div>
            <div className="flex h-[225px] flex-col justify-center overflow-y-scroll">
              <span
                className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500"
                onClick={() => dispatch(toggleModal({ isActive: true }))}
              >
                Create Bucket
              </span>
              <span
                className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500"
                onClick={() => dispatch(toggleCardModal({ isActive: true }))}
              >
                Create Card
              </span>
              <span className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500">
                Sports
              </span>
              <span className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500">
                Education
              </span>
              <span className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500">
                Music
              </span>
            </div>
          </div>
          <span className="pointer-events-auto flex cursor-pointer items-center gap-3 px-5 py-2 text-base">
            History
            <FaHistory className="text-lg text-indigo-400" />
          </span>
        </div>
        <div className="grid-col-1 grid w-[100%] gap-5 overflow-y-scroll p-20 sm:grid-cols-2 md:w-[75%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* //TODO: MAP THE CARDS */}
          <Card Link={"https://www.youtube.com/watch?v=iBUJVy8phqw&t=244s"} />
        </div>
      </div>
      {createBucketModalStatus ? <CreateBucket /> : null}
      {createCardModalStatus ? <CreateCard /> : null}
    </>
  );
};

export default Home;
