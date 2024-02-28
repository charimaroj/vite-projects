import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import "./Theme.css";

const Theme = () => {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  //actual change theme
  useEffect(() => {    
    if (themeMode == "light") {
      document.querySelector("html").removeAttribute("data-theme", "light");
    }
    document.querySelector("html").setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const themeHandler=()=>{
    if(themeMode=="light"){
      setThemeMode("dark")
    }else{
      setThemeMode("light")
    }
  }

  return (
    <ThemeContextProvider value={{ themeMode, lightMode, darkMode }}>
      <h1>Theme</h1>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={themeHandler}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
      
    </ThemeContextProvider>
  );
};

export default Theme;
