import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth, _auth, _db } from '../../config/firebase';

export const login = createAsyncThunk(
  'auth/loginStatus',
  async ({ email, password }: any, { rejectWithValue }) => {
    try {
      await _auth.signInWithEmailAndPassword(auth, email, password);

      return;
    } catch (error) {
      if (!(error as any).response) {
        throw (error as any).message;
      }
      rejectWithValue((error as any).response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logoutStatus',
  async (_: void, { rejectWithValue }) => {
    try {
      await auth.signOut();
    } catch (error) {
      if (!(error as any).response) {
        throw (error as any).message;
      }
      rejectWithValue((error as any).response.data);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,

    loading: false,
  },
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

// export const {
//   updateUserTeam,
//   updateCurrentTeam,
//   addUserProject,
//   updateUserProject,
//   deleteUserProject,
// } = authSlice.actions;

export default authSlice.reducer;
