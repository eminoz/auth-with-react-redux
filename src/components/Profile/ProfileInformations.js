import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { getUsersAddress } from "../../store/user-actions";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileInformations({ user }) {
  const address = useSelector((s) => s.todox.address);
  console.log(address);
  console.log(user);
  const dispatch = useDispatch();
  const loc = useLocation();
  let navigate = useNavigate();

  console.log(loc.pathname);

  const updateUserInformaition = (e) => {
    console.log(e.target.id);
    navigate(loc.pathname+"/" + e.target.id);
  };
  const updateUserAddress = (e) => {
    console.log(e.target.id);
    navigate(loc.pathname+"/" + e.target.id);
  };
  useEffect(() => {
    dispatch(getUsersAddress(user.email));
  }, [user, dispatch]);
  return (
    <>
      {user && (
        <div className="w-96">
          <div className="m-1 ">personel Informations</div>
          <div>
            <div className="bg-slate-200 m-1 p-1">
              <p className="text-lg font-bold">user name</p>
              <p>{user.name} </p>
            </div>

            <div className="bg-slate-200 m-1 p-1">
              <p className="text-lg font-bold">user email</p>
              <p>{user.email} </p>
            </div>
            <div className="flex justify-center">
              <button
                id="setUserInformations"
                onClick={updateUserInformaition}
                className="bg-fuchsia-200 m-1 p-1 rounded "
              >
                update user
              </button>
            </div>
          </div>
          <div>
            <div className="m-1">
              <p className="text-lg">Address</p>
            </div>
            <div className="bg-slate-200 m-1 p-1">
              <p className="text-lg font-bold p-1">İl</p>
              <p>{address.il} </p>
              <p className="text-lg font-bold p-1">İlçe </p>
              <p>{address.ilce} </p>
              <p className="text-lg font-bold p-1 ">Full adress</p>
              <p>{address.fullAddress} </p>
            </div>
            <div className="flex justify-center">
              <button
                id="setAddress"
                onClick={updateUserAddress}
                className="bg-fuchsia-200 m-1 p-1 rounded "
              >
                add or update order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileInformations;
