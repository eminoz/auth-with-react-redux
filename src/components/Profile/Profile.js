import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../index.css";
import ProfileInformations from "./ProfileInformations";
import SetUserAddress from "./SetUserAddress";
import SetUserInformations from "./SetUserInformations";
function Profile() {
  let user = useSelector((state) => state.todox.user);

  return (
    <>
      <div className="flex  justify-center">
        <div>
          <>
            <Routes>
              <Route path="/" element={<ProfileInformations user={user} />} />
              <Route
                path="setUserInformations"
                element={<SetUserInformations />}
              />
              <Route path="setAddress" element={<SetUserAddress />} />
            </Routes>
          </>
        </div>
      </div>
    </>
  );
}

export default Profile;
