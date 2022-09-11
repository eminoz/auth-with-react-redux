import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";

function GetUser() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getUserByEmail = async (email) => {
    const response = await axios.get(
      `http://localhost:8090/api/user/getUser/${email}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        mode: "cors",
      }
    );

    return response;
  };

  useEffect(() => {
    getUserByEmail("fatih@gmail.com").then((e) => {
      console.log(e.data);
      setEmail(e.data.email);
      setId(e.data.id);
      setName(e.data.userName);
    });
  }, []);
  return (
    <>
      <table className="table-auto m-2 bg-orange-100">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default GetUser;
