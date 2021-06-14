import { produce } from "immer";

const initialState = {
  user: {
    name: null,
  },
};

export default produce((state, action) => {
  if (action.type === "SET_USER_NAME") state.user.name = action.payload;
  else return state;
}, initialState);
