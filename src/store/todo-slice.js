import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    user: null,
  },
  reducers: {
    getUser(state) {
      const getUserByEmail = async (email) => {
        const response = await axios.get(
          `http://localhost:8090/api/user/getUser/fatih@gmail.com`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
            mode: "cors",
          }
        );

        return response;
      };
      const users = getUserByEmail();
      users.then((e) => {
        console.log(e.data);
        state.user = e.data;
      });
    },

    createTodo(state, action) {
      const t = action.payload.name;

      state.todo = [...state.todo, t];
      console.log(state.todo);
    },
    deleteTodo(state, action) {
      const veri = action.payload;
      state.todo = state.todo.filter((e) => e !== veri);
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
