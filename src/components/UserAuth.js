import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../index.css";
import { createUser, signin } from "../store/user-actions";
function UserAuth() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSingedUp, setisSingedUp] = useState(false);

  const dispatch = useDispatch();
  const create = () => {
    const user = { name, email, password };
    if (name === "" && email === "" && password === "") {
      alert(" bilgiler boş kalamaz");
    }
    dispatch(createUser({ user }));
  };
  const signedin = () => {
    const user = { email, password };
    dispatch(signin({ user }));
  };
  const afterSubmission = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-6/12 m-2  rounded flex justify-center bg-red-50">
          <form
            onSubmit={afterSubmission}
            className="m-2  flex flex-col h-100 justify-around"
          >
            {isSingedUp && (
              <input
                className="mb-2 rounded p-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                name="firstName"
              />
            )}

            <input
              value={email}
              className="mb-2 rounded p-1 mt-2"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
            />
            <input
              className="mt-2 rounded p-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              name="password"
            />

            <button
              onClick={isSingedUp ? create : signedin}
              className="bg-stone-400 mt-2 mb-2 rounded p-2"
            >
              {isSingedUp ? <p>sign up</p> : <p>sign in </p>}
            </button>

            <div className="flex justify-center w-60 min-w-full flex-row ">
              {isSingedUp ? (
                <p className=" bg-red-300 rounded p-1">got an account </p>
              ) : (
                <p className=" bg-red-300 rounded p-1">create an account </p>
              )}
              <button
                className="ml-2 rounded bg-red-400 p-1"
                onClick={() => {
                  setisSingedUp(!isSingedUp);
                }}
              >
                {isSingedUp ? <p>sign in</p> : <p>sign up </p>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserAuth;
