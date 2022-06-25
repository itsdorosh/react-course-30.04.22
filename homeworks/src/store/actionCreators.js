import { ACTION_TYPES } from "./actionTypes";

export function incrementActionCreator() {
  return { type: ACTION_TYPES.SET };
}

export function setValueActionCreator(value) {
  return { type: ACTION_TYPES.SET, payload: value };
}

export function complicatedActionCreator(musicBand, place, author, todoItemId) {
  return { type: "THAT's FINE", payload: { event: musicBand.event.title, id: todoItemId, author } };
}
