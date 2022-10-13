import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
function Header() {
  const dispatch = useDispatch();
  // let user = useSelector((state) => state.todox.user);
  // console.log(user);

  const logoutUser = () => {
    dispatch(userActions.logout());
  };
  return (
    <>
      <div className="flex m-2 justify-center">
        <div className="flex flex-row p-2 bg-rose-100">
          <div className="bg-fuchsia-200 rounded p-2 m-1">Main</div>
          <button className="bg-red-300 rounded p-2 m-1" onClick={logoutUser}>
            logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
