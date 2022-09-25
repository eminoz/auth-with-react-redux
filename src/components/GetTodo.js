import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { todoActions } from "../store/todo-slice";
import CreateTodo from "./CreateTodo";

function GetTodo() {
  let allTodos = useSelector((state) => state.todox.todo);
  const dispatch = useDispatch();
  const deleteTodo = (e) => {
    const bi = e.target.id;
    dispatch(todoActions.deleteTodo(bi));
  };
  return (
    <div>
      <div className="h-100 w-full bg-slate-50 flex items-center justify-center bg-teal-lightest ">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4 flex justify-center bg-inherit">
            <h1 className="text-grey-darkest text-xl">Todo List</h1>
          </div>
          <CreateTodo />
          {allTodos.map((e) => (
            <div
              key={e}
              className=" flex-col   items-center justify-center flex mt-3 justify-around  "
            >
              <div key={e} className="flex  mb-4 items-center">
                <p
                  key={e}
                  className="bg-cyan-100 w-1/2 md:w-full  rounded-md p-2"
                >
                  {e}
                </p>
                <button
                  id={e}
                  onClick={deleteTodo}
                  className="flex-no-shrink bg-amber-100 p-2 ml-4 mr-2 border-2 rounded  text-green border-green "
                >
                  Done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetTodo;
