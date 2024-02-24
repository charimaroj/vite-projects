import React, {useContext, useState} from "react";
import UserContext from "../context/UserContext";
const Login = () => {
    const {setUser} = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        setUser({username, password})

    }
  return (
    <>
      <div className="row">
        <div className="col-md-4 m-auto my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="username"
                    onChange={(e)=>setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="inputPassword5" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  placeholder="password"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <div id="passwordHelpBlock" className="form-text"></div>
              </div>
              <div className="col-md-12">
                <button type="button" className="btn btn-primary" onClick={submitHandler}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
