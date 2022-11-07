import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "../../store/user-actions";
function SetUserAddress() {
  const address = useSelector((s) => s.todox.address);
  const email = useSelector((s) => s.todox.user.email);
  console.log(address)
  const dispatch = useDispatch();
  const [il, setIl] = useState(address.il);
  const [ilce, setIlce] = useState(address.ilce);
  const [fullAddress, setFullAdress] = useState(address.fullAddress);
  const update = (event) => {
    event.preventDefault();
    const address = { il, ilce, fullAddress };
    dispatch(updateOrders({ email, address }));
  };
  return (
    <div>
      <div className="bg-green-200 p-3">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="font-bold	"> İl:</p>
            <input
              className="m-1 rounded p-1"
              onChange={(e) => {
                setIl(e.target.value);
              }}
              placeholder={`${address.il}`}
              type="text"
              name="il"
              value={il}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold	">ilce:</p>
            <input
              className="m-1 rounded p-1"
              onChange={(e) => {
                setIlce(e.target.value);
              }}
              placeholder={` ${address.ilce}`}
              type="text"
              name="ilce"
              value={ilce}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold	" >Full Address:</p>
            <input
              className="m-1 rounded p-1"
              onChange={(e) => {
                setFullAdress(e.target.value);
              }}
              placeholder={` ${address.fullAddress}`}
              type="text"
              value={fullAddress}
              name="il"
            />
          </div>
          <button className="bg-violet-300 p-1 rounded m-1" onClick={update}>
            update
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetUserAddress;
