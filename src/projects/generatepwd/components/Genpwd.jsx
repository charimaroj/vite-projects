import React, { useCallback, useState, useEffect, useRef } from "react";

const Genpwd = () => {
  const [pwdLength, setPwdLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pwd, setPwd] = useState("");

  //useRef
  const pwdRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFCGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys";
    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+=-[]{}";

    for (let i = 1; i <= pwdLength; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPwd(pass);
  }, [pwdLength, numbersAllowed, charAllowed, setPwd]);

  const copyPwd = useCallback(() => {
    pwdRef.current?.select();
    window.navigator.clipboard.writeText(pwd);
  }, []);

  useEffect(() => {
    passwordGenerator();
  }, [pwdLength, numbersAllowed, charAllowed, setPwd]);

  return (
    <div className="row vh-100 d-flex align-items-center justify-content-center">
      <div className="col-12 d-flex align-items-center justify-content-center">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="pwd" className="form-label">
              Password
            </label>
            <input
              ref={pwdRef}
              type="text"
              className="form-control"
              id="pwd"
              placeholder="password"
              value={pwd}
              readOnly
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-3" onClick={copyPwd}>
              Copy Password
            </button>
          </div>

          <label htmlFor="range" className="form-label">
            Length {pwdLength}
          </label>
          <input
            type="range"
            id="range"
            value={pwdLength}
            min={6}
            max={100}
            onChange={(e) => {
              setPwdLength(e.target.value);
            }}
          />
          <div
            className="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input
              type="checkbox"
              className="btn-check"
              id="nums"
              defaultChecked={numbersAllowed}
              onChange={() => setNumbersAllowed((prevValue) => !prevValue)}
            />
            <label className="btn btn-outline-primary" htmlFor="nums">
              Include Numbers
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="char"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prevValue) => !prevValue)}
            />
            <label className="btn btn-outline-primary" htmlFor="char">
              Include Charecters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genpwd;
