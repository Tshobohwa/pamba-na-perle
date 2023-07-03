import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "Salomon",
  lastname: "Tshobohwa",
  email: "stshobohwa@gmail.com",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
});

export default usersSlice.reducer;
