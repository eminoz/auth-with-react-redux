import axios from "axios";
import React, { useState } from "react";
import "../index.css";
import Input from "../UI/Input";
function PostUser() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  const creatUser = async ({ name, email, password, role }) => {
    const options = {
      url: `http://localhost:8090/api/user/create`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        userName: name,
        email: email,
        password: password,
      },
      mode: "cors",
    };
    const res = await axios(options);
    console.log(res);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePasword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <form className="m-2">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            username
          </span>

          <Input onChange={handleName} />
          <span className="block text-sm font-medium text-slate-700">
            email
          </span>
          <Input onChange={handleEmail} />
          <span className="block text-sm font-medium text-slate-700">
            password
          </span>
          <Input onChange={handlePasword} />
        </label>
        <button
          onClick={() => {
            creatUser({ name, email, password, role });
          }}
        >
          Post
        </button>
      </form>
    </>
  );
}

export default PostUser;
