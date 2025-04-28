import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'Spaghetti Bolognese',
        ingredients: ['spaghetti', 'minced beef', 'onion', 'garlic', 'tomato sauce', 'olive oil', 'carrot'],
        category: 'Italian'
    },
    {
        id: '2',
        name: 'Chicken Curry',
        ingredients: ['chicken', 'curry powder', 'onion', 'garlic', 'coconut milk', 'ginger', 'tomato'],
        category: 'Indian'
    },
    {
        id: '3',
        name: 'Caesar Salad',
        ingredients: ['romaine lettuce', 'croutons', 'parmesan cheese', 'chicken breast', 'caesar dressing', 'lemon'],
        category: 'Salad'
    },
];

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe(state, action) {
      state.push(action.payload);
    },

    updateRecipe(state, action) {
      const index = state.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    deleteRecipe(state, action) {
      return state.filter((recipe) => recipe.id !== action.payload);
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
