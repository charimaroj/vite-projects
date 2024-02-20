import React from "react";
import Genpwd from "./projects/generatepwd/components/Genpwd";

import Exchange from "./projects/currency/Exchange";

const App = () => {
  return (
    <div className="container-fluid p-0">
      {/* ===== Generate Password - useState, useEffect, useCallBack, useRef - START =====*/}
      {/* <Genpwd/> */}
      {/* ===== Generate Password - END =====*/}

      <Exchange />
    </div>
  );
};

export default App;
