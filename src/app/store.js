import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice';
import cartReducer from '../features/Cart/cartSlice';
import userReducer from "./userSlice";
const rootReducer = {
    count: counterReducer,
    cart: cartReducer,
    user: userReducer,
}
const store = configureStore({
    reducer: rootReducer,
})
export default store;