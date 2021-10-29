import { configureStore } from "@reduxjs/toolkit";

import courseDataReducer from "./courseData";

export const store = configureStore({
  reducer: { courseData: courseDataReducer },
});
