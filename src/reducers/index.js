import { combineReducers } from "redux";
import cartReducer from "../cart/reducers/cartReducer";
import bookmarkReducer from "../bookmark/reducers/bookmarkReducer";


export default combineReducers({
    cartReducer
    , bookmarkReducer
});