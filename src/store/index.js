import { configureStore } from "@reduxjs/toolkit"
import provincesReducer from "../Features/ProvincesSlices"

const store = configureStore({
    reducer: {
        provinces: provincesReducer,
    }
})

export default store;