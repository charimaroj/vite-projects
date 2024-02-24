import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const User = () => {
  const { user } = useContext(UserContext);


  return (
    <>
      <div className="row">
        <div className="col-md-4 m-auto my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-3">
               {user ?  <h1>Welcome : {user.username} </h1> : <h1>Please enter user details</h1>}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
