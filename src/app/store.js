import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice';
import cartReducer from '../features/Cart/cartSlice';
const rootReducer = {
    count: counterReducer,
    cart: cartReducer,
}
const store = configureStore({
    reducer: rootReducer,
})
export default store;