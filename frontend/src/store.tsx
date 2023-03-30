import { configureStore } from "@reduxjs/toolkit";

// SLICES
import { ModalSlice } from "./slices/ModalSlice";
import { CreateBucketSlice } from "./slices/CreateBucketSlice";
import { CardSlice } from "./slices/CreateCardSlice";
import { BucketsSlice } from "./slices/BucketsSlice";
import { CardsSlice } from "./slices/CardsSlice";
import { DeleteCardSlice } from "./slices/DeleteCardsSlice";

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    createBucketModal: CreateBucketSlice.reducer,
    card: CardSlice.reducer,
    buckets: BucketsSlice.reducer,
    cards: CardsSlice.reducer,
    deleteCards: DeleteCardSlice.reducer,
  },
});

export default store;
