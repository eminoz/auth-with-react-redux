import React from "react";
import "../index.css";
import CreateTodo from "./CreateTodo";

function GetTodo() {
  return (
    <div>
      <div className="h-100 w-full bg-slate-50 flex items-center justify-center bg-teal-lightest ">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4 flex justify-center bg-inherit">
            <h1 className="text-grey-darkest text-xl">Todo List</h1>
          </div>
          <CreateTodo />
          <div className="mt-3">
            <div className="flex mb-4 items-center">
              <p className="bg-cyan-100 rounded-md p-2">
                Add another component to Tailwind Components
              </p>
              <button className="flex-no-shrink bg-amber-100 p-2 ml-4 mr-2 border-2 rounded text-green border-green ">
                Done
              </button>
              <button className="flex-no-shrink bg-amber-100 p-2 ml-2 border-2 rounded text-red border-red ">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTodo;
