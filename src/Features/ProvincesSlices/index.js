// import createSlice: untuk membuat slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constants/provinces";

const provincesSlice = createSlice({
  name: "Provinces Slice",
  initialState: {
    provinces: data,
  },
  reducers: {
    addProvince(state, action) {
      state.provinces.push(action.payload);
    },
    updateProvince(state, action) {
      const index = state.provinces.provinces.findIndex(e => e.kota === action.payload.kota)
      state.provinces.provinces[index] = action.payload
    }
  },
});
const { addProvince, updateProvince } = provincesSlice.actions;
const provincesReducer = provincesSlice.reducer;

// Export reducers dan actions
export default provincesReducer;
export { addProvince, updateProvince };