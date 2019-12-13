import * as types from "./types";

const { INCREMENT, DECREMENT } = types;

export const addCounter = () => ({
  type: INCREMENT,
  payload: {}
});

export const subtractCounter = () => ({
  type: DECREMENT,
  payload: {}
});
