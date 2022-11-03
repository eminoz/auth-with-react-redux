import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "../../store/user-actions";
function SetUserAddress() {
  console.log("first");
  const address = useSelector((s) => s.todox.address);
  const email= useSelector((s) => s.todox.user.email);
  const dispatch=useDispatch()
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [fullAddress, setFullAdress] = useState("");
  const update = (event) => {
    event.preventDefault();
   const address={il,ilce,fullAddress}
dispatch(updateOrders({email,address}))
  };
  return (
    <div>
      <div className="bg-green-200 p-3">
        <form>
          <input
            className="m-1 rounded p-1"
            onChange={(e) => {
              setIl(e.target.value);
            }}
            placeholder={`name: ${address.il}`}
            type="text"
            name="il"
          />
          <input
            className="m-1 rounded p-1"
            onChange={(e) => {
              setIlce(e.target.value);
            }}
            placeholder={`name: ${address.ilce}`}
            type="text"
            name="ilce"
          />
          <input
            className="m-1 rounded p-1"
            onChange={(e) => {
              setFullAdress(e.target.value);
            }}
            placeholder={`name: ${address.fullAddress}`}
            type="text"
            name="il"
          />
          <button className="bg-violet-300 p-1 rounded m-1" onClick={update}>
            update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetUserAddress;
