import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth, _auth, db, _db } from '../../config/firebase';

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    datas: [],

    nodes: [],

    bles:[],

    loading: null,
  },
  reducers: {
    setRooms: (state, action) => {
      state.datas = action.payload;
    },
    setNodes: (state, action)=>{
      state.nodes = action.payload;
    },
    setBles: (state, action)=>{
      state.bles = action.payload;
    }
  },

  extraReducers: (builder) => {
    // builder.addCase(setUser.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(setUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.loading = false;
    // });

    // builder.addCase(login.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(login.fulfilled, (state) => {
    //   state.loading = false;
    // });

    // builder.addCase(logout.fulfilled, (state) => {
    //   state.user = null;
    // });
  },
});

export const {
  // updateUserTeam,
  // updateCurrentTeam,
  // addUserProject,
  // updateUserProject,
  // deleteUserProject,
  setRooms,
  setNodes,
  setBles,
} = roomsSlice.actions;

export default roomsSlice.reducer;
