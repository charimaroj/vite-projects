import React from "react";
//project-1
import Genpwd from "./projects/generatepwd/components/Genpwd";


const App = () => {
  return (
    <div className="container-fluid p-0">  
      {/* ===== Project-1 Generate Password - useState, useEffect, useCallBack, useRef - START =====*/}
      <Genpwd/>
      {/* ===== Project-1 - END =====*/}
    </div>
  );
};

export default App;
