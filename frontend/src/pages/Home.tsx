import Card from "../components/Home/Card";
import { FaHistory } from "react-icons/fa";
import NavbarHome from "../components/NavbarHome";
import { useDispatch } from "react-redux";
import { toggleModal } from "../slices/CreateBucketSlice";
import { useSelector } from "react-redux";
import CreateBucket from "../components/Home/CreateBucket";
import CreateCard from "../components/Home/CreateCard";
import { toggleCardModal } from "../slices/CreateCardSlice";
import { useEffect } from "react";
import axios from "axios";
import { setBuckets } from "../slices/BucketsSlice";
import { setCards } from "../slices/CardsSlice";

// TYPES
interface bucket {
  bucket_name: string;
}
export interface card {
  id: string;
  card_name: string;
  link: string;
  bucket_name: string;
}
export type cardsArray = Array<card>;
export type bucketsArray = Array<bucket>;

const Home = () => {
  const dispatch = useDispatch();
  const createBucketModalStatus = useSelector(
    (state: any) => state.createBucketModal.value.isActive
  );
  const createCardModalStatus = useSelector(
    (state: any) => state.card.value.isActive
  );
  const buckets: bucketsArray = useSelector(
    (state: any) => state.buckets.value
  );
  const cards: cardsArray = useSelector((state: any) => state.cards.value);

  async function getBucketData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:5000/buckets",
        headers: {
          email: localStorage.getItem("email"),
        },
      });
      dispatch(setBuckets(data));
    } catch (error: any) {
      alert(error.message);
    }
  }
  async function getCardData() {
    try {
      const resp = await axios({
        method: "get",
        url: "http://localhost:5000/cards",
        headers: {
          email: localStorage.getItem("email"),
        },
      });
      if (resp.status === 200) dispatch(setCards(resp.data));
    } catch (error: any) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getCardData();
  }, [createCardModalStatus]);

  useEffect(() => {
    try {
      getBucketData();
    } catch (error: any) {
      alert(error.message);
    }
  }, [createBucketModalStatus]);

  const cardsArray: string[] = useSelector(
    (state: any) => state.deleteCards.value
  );

  const deleteAll = async (e: any) => {
    e.preventDefault();
    console.log(cardsArray);
    try {
      const resp = await axios({
        method: "delete",
        url: "http://localhost:5000/cards/multicards",
        headers: {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
          cardsArray: cardsArray,
        },
      });
      if (resp.status === 200) {
        alert("Deleted successfuly!");
        window.location.reload();
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <NavbarHome />
      <div className="flex h-[calc(100vh-70px)] w-screen justify-between">
        <button
          className="absolute right-0 mr-9 mt-4 rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-500"
          onClick={deleteAll}
        >
          Delete All
        </button>
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
              {buckets.map((bucket) => {
                return (
                  <span className="pointer-events-auto flex cursor-pointer px-5 py-2 text-base hover:text-indigo-500">
                    {bucket.bucket_name}
                  </span>
                );
              })}
            </div>
          </div>
          <span className="pointer-events-auto flex cursor-pointer items-center gap-3 px-5 py-2 text-base">
            History
            <FaHistory className="text-lg text-indigo-400" />
          </span>
        </div>
        <div className="grid-col-1 grid w-[100%] gap-5 overflow-y-scroll p-20 sm:grid-cols-2 md:w-[75%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {cards.map((card) => {
            return <Card data={card} />;
          })}
        </div>
      </div>
      {createBucketModalStatus ? <CreateBucket /> : null}
      {createCardModalStatus ? <CreateCard /> : null}
    </>
  );
};

export default Home;
