import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../store/user-actions";
import "../index.css";
function UserList() {
  const dispatch = useDispatch();
  let allUser = useSelector((state) => state.todox.allUser);

  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);
  return (
    <>
      <div className="flex m-2 justify-center">
        <div>
          {allUser.map((s) => (
            <div className="bg-red-50 rounded m-1" key={s.id}>{s.name} </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserList;
