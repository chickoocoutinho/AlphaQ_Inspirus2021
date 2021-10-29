import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseNames: [],
  courseResources: {},
  iframeUrl: "",
  pdfUrl: "",
};

const courseData = createSlice({
  name: "courseData",
  initialState,
  reducers: {
    updateCourseNames: (state, { payload }) => {
      state.courseNames = payload.data;
    },
    setCourseResources: (state, { payload }) => {
      state.courseResources = {
        ...state.courseResources,
        [payload.courseId]: payload.data,
      };
    },
    setIframeUrl: (state, { payload }) => {
      state.iframeUrl = payload.data;
    },
    setPdfUrl: (state, { payload }) => {
      state.pdfUrl = payload.data;
    },
  },
});

const { actions, reducer } = courseData;
export const {
  updateCourseNames,
  setCourseResources,
  setIframeUrl,
  setPdfUrl,
} = actions;
export default reducer;
