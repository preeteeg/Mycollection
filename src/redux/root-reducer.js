//all the reducers will be in the root reducer
//actual base reducer object of all states combined in our application

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
//local storage
import storage from "redux-persist/lib/storage";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] //array to store the reducer in local storage
};

// export default combineReducers({
//     user:userReducer,
//     cart:cartReducer
// })

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
