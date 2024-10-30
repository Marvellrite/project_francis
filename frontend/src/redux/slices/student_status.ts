import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isStudent: true,
};

const userStatus = createSlice({
  name: "student_status",
  initialState,
  reducers: {
    changeStudentStatus: (state, studentStatus: PayloadAction<boolean>) => {
      state.isStudent = studentStatus.payload;
    },
  },
});

export default userStatus.reducer;
export const { changeStudentStatus } = userStatus.actions;
