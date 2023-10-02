import { createSlice,PayloadAction } from '@reduxjs/toolkit';


//type checks for Login state info
interface LoginState {
    loggedIN: boolean;
}

const initialState:LoginState = {
    loggedIN: false,
  }

  export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
      update_login: (state, action: PayloadAction<boolean>) => {
        state.loggedIN = action.payload;
      },
    },
  });

export const { update_login} = loginSlice.actions

export default loginSlice.reducer