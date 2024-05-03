import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardsSlice';

// Configure the Redux store
export default configureStore({
  // Define the reducers for the store
  reducer: {
    cards: cardsReducer, // Use the cardsReducer for managing cards state
  },
});
