import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getData = createAsyncThunk(
  "courseData/getData",
  async (userDetails, thunkAPI) => {
    const courseNames = await window.gapi?.client?.classroom?.courses
      .list()
      .then((response) => response.result.courses);
    let promises = [];
    courseNames.forEach((course) =>
      promises.push(
        window.gapi.client.classroom.courses.courseWorkMaterials
          .list({
            courseId: course.id,
          })
          .then((response) => response.result.courseWorkMaterial)
      )
    );
    const data = await Promise.all(promises);
    console.log(data);
    return { data, courses: courseNames };
  }
);

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
  extraReducers: {
    [getData.fulfilled]: (state, { payload }) => {
      state.courseNames = payload.courseNames;
      state.courseResources = payload.data.reduce(
        (prevValue, currentValue) =>
          (prevValue = {
            ...prevValue,
            [currentValue[0].courseId]: currentValue,
          }),
        {}
      );
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
export { getData };
export default reducer;
