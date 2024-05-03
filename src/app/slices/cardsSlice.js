
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  activeCard: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.cards.splice(action.payload, 1);
    },
    setActiveCard: (state, action) => {
      state.activeCard = action.payload;
    },
  },
});

export const { addCard, deleteCard, setActiveCard } = cardsSlice.actions;
export const selectCards = (state) => state.cards.cards;

export default cardsSlice.reducer;
