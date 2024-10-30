import { configureStore } from "@reduxjs/toolkit";
import studentStatus from "./slices/student_status";

export const store = configureStore({
  reducer: {
    studentStatus,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
