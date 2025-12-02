import { ReduUndoActionTypes } from "./undoReduActionType";

export const initialStateReduUndo = {
  past: [], // pehle ki states
  present: "", // abhi ka current value
  future: [], // redo ke liye future states
};

export function undoRedoReducer(state, action) {
  const { past, present, future } = state;

  switch (action.type) {
    case ReduUndoActionTypes.SET:
      return {
        past: [...past, present],
        present: action.payload,
        future: [],
      };

    case ReduUndoActionTypes.UNDO:
      if (past.length === 0) return state; // agar past empty hai toh kuch nahi karna

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future], // old present ko future me daalo
      };

    case ReduUndoActionTypes.REDO:
      if (future.length === 0) return state; // agar future empty hai toh kuch nahi karna

      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present], // redo karte waqt present ko past me daalo
        present: next, // future wala value use
        future: newFuture,
      };

    default:
      return state;
  }
}
