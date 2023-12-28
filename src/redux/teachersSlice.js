import { createSlice } from '@reduxjs/toolkit';

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
