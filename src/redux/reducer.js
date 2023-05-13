// Редюсер (reducer) - це функція, яка приймає поточний стан та екшен як аргументи 
// і повертає новий стан. Редюсер визначає, як змінюється стан програми у відповідь 
// на екшени, надіслані на стор. Пам'ятайте, що екшени описують тільки те, що сталося, 
// а не як змінюється стан програми

//=============== Before ========================

// import { statusFilters } from "./constants";

// Імпортуємо функцію композиції редюсерів
// import { combineReducers } from "redux";


// Код редюсерів tasksReducer та filtersReducer
// export const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   });

// Використовуємо initialState як значення стану за умовчанням
// const tasksReducer = (state = tasksInitialState, action) =>  {
  // Редюсер розрізняє екшени за значенням властивості type
//   ------------------------------------------------------------------
//   switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    // case "tasks/addTask":
    //     return [...state, action.payload];
    //   ------------------------------------------------------------------
    // case "tasks/deleteTask":
    //     return state.filter(task => task.id !== action.payload);
    //   ------------------------------------------------------------------
    // case "tasks/toggleCompleted":
    //     return state.map(task => {
    //         if (task.id !== action.payload) {
    //           return task;
    //         }
    //         return { ...task, completed: !task.completed };
    //       });
    //       default:
    //         return state;
    //     }
    //   };

    //   ------------------------------------------------------------------
    // const filtersInitialState = {
    //     status: statusFilters.all,
    //   };
      // Відповідає лише за оновлення властивості filters
      // Тепер значенням параметра state буде об'єкт фільтрів
    //   const filtersReducer = (state = filtersInitialState, action) => {
    //     switch (action.type) {
    //       case "filters/setStatusFilter":
    //         return {
    //           ...state,
    //           status: action.payload,
    //         };
    //       default:
    //         return state;
    //     }
    //   };


  //=============== After ========================  

  import { createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from "./actions";
import { statusFilters } from "./constants";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
        break;
      }
    }
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});



