import { createSlice } from '@reduxjs/toolkit';
const initialState = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1603145733146-ae562a55031e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'post 1 description',
    date: new Date().toISOString(),
    Like: 15,
    comment: 5,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'post 2 description',
    date: new Date().toISOString(),
    Like: 30,
    comment: 10,
  },
];

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    createPost: (state, action) => {
      const newPost = {
        id: Date.now(),
        image: action.payload.image,
        description: action.payload.description,
        date: new Date().toISOString(),
        like: 0,
        commment: 0,
      };
      state.push(newPost);
    },
    updatePost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});
export const { createPost, updatePost } = postSlice.actions;
export default postSlice.reducer;
