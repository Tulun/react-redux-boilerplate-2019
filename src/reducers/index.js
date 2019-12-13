// This is the spot where we combine all the reducers into Redux. Redux separates portions of the global state into individual reducers.
// But when you create your store which holds the global state, it wants all reducers combined into 1 object.
import { combineReducers } from "redux";
import counter from "./counter";

// This will be the name of the portion of the object.
// In mapStateToProps, for example:
// state.auth would return the auth state properties,
// state.contract would return the contract state properties, and so on.

const reducers = combineReducers({
  counter
});

export default reducers;
