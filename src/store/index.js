import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { INITIAL_TASK_DATA } from "../data/task";
import { setLocalStorage } from "../config/setting";
import { getLocalStorage } from "../config/setting";
import { deleteAllFromLocalStorage } from "../config/setting";
import { deleteTaskFromLocalStorage } from "../config/setting";

const initialState = { tasks: INITIAL_TASK_DATA };

const tasksSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      action.payload.id = uuidv4();
      state.tasks = [action.payload, ...state.tasks];
      setLocalStorage(action.payload.id, action.payload);
    },
    addTaskFromLocalStorage(state) {
      const tasksFromLocalStorage = getLocalStorage();
      state.tasks = [...tasksFromLocalStorage, ...state.tasks];
    },
    deleteAllTasks(state) {
      state.tasks = [...INITIAL_TASK_DATA];
      deleteAllFromLocalStorage();
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      deleteTaskFromLocalStorage(action.payload);
    },
  },
});

export const taskActions = tasksSlice.actions;

const store = configureStore({
  reducer: tasksSlice.reducer,
});

export default store;
