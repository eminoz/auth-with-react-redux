import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { getUsersAddress } from "../../store/user-actions";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileInformations({ user }) {
  const address = useSelector((s) => s.todox.address);
  const dispatch = useDispatch();
  const loc = useLocation();
  let navigate = useNavigate();

  const updateUserInformaition = (e) => {
    navigate(loc.pathname + "/" + e.target.id);
  };
  const updateUserAddress = (e) => {
    navigate(loc.pathname + "/" + e.target.id);
  };
  useEffect(() => {
    console.log(user.email)
    dispatch(getUsersAddress(user.email));
  }, [user, dispatch]);
  return (
    <>
      {user && (
        <div className="w-96">
          <div className="m-1 ">User Informations</div>
          <div>
            <div className=" flex items-center bg-slate-200 m-1 p-1">
              <p className="text-lg font-bold">user name</p>
              <p className="ml-1">{user.name} </p>
            </div>

            <div className=" flex  items-center bg-slate-200 m-1 p-1">
              <p className="text-lg font-bold">user email:</p>
              <p className="ml-1">{  user.email} </p>
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
            {address.il === "" ? (
              <div className="bg-slate-200 p-1 m-1 rounded">
                <p>adres eklenmemiş lütfen adres ekleyiniz </p>
              </div>
            ) : (
              <div className="bg-slate-200 m-1 p-1">
                <div className="flex items-center ">
                  <p className="text-lg font-bold p-1">İl:</p>
                  <p>{address.il} </p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-bold p-1">İlçe: </p>
                  <p>{address.ilce} </p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-bold p-1 ">Full adress: </p>
                  <p>{address.fullAddress} </p>
                </div>
              </div>
            )}
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
