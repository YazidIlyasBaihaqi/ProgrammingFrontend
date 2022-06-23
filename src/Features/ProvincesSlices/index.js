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
      // const index = data.provinces.findIndex(province => province.kota === action.payload.kota)
      // const newArray = data.provinces;
      // const a = state.provinces.provinces
      // console.log(a)
      // newArray[index] = action.payload
      // let updated = {
      //   last_update: "2022-06-22",
      //   total_province: 34,
      //   provinces: newArray
      // }
      // console.log(updated)
      // state.provinces = updated.provinces;


    }
  },
});
const { addProvince, updateProvince } = provincesSlice.actions;
const provincesReducer = provincesSlice.reducer;

// Export reducers dan actions
export default provincesReducer;
export { addProvince, updateProvince };