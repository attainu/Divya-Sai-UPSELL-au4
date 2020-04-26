import { createStore } from "redux";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, composeWithDevTools());
let persistor = persistStore(store);

export { store, persistor };
