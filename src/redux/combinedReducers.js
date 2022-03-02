import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./reducers";


const allReducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default allReducers;