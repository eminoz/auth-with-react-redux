import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.todox.user);
  const totalPrice = useSelector((state) => state.orderx.totalPrice);
  const logoutUser = () => {
    dispatch(userActions.logout());
  };

  return (
    <>
      <div className="flex m-2 justify-center">
        <div className="flex flex-row p-2 bg-rose-100  items-center">
          <div className="bg-fuchsia-200 rounded p-2 m-1">
            <nav>
              <Link to="/">Main</Link>
            </nav>
          </div>
          {user.role === "admin" ? (
            <div className="bg-fuchsia-200 rounded p-2 m-1">
              <nav>
                <Link to="/productSettings">Product Settings</Link>
              </nav>
            </div>
          ) : null}
          <div className="bg-fuchsia-200 rounded p-2 m-1">
            <nav>
              <Link to="/orders">Orders</Link>
            </nav>
          </div>

          <div className="bg-pink-200 p-2 rounded m-1">
            total price {totalPrice}$
          </div>

          <div className="bg-fuchsia-200 rounded p-2 m-1">
            <nav>
              <Link to="/profile">Profile</Link>
            </nav>
          </div>

          <button className="bg-red-300 rounded p-2 m-1" onClick={logoutUser}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
