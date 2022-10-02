import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import "../index.css";
function Main() {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(userActions.logout());
  };
  return (
    <>
      <div className="flex m-1">
        <div className="bg-fuchsia-200 rounded p-2 m-1">Main</div>
        <button className="bg-red-300 rounded p-2 m-1" onClick={logoutUser}>
          logout
        </button>
      </div>
    </>
  );
}

export default Main;
