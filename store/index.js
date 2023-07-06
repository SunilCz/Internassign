import {createStore} from "redux";
import rootReducers from "./reducer";
import addCart from "./action/add";
import deleteCart from "./action/deletes";
const store = createStore(rootReducers);
export default store
export { addCart , deleteCart } 