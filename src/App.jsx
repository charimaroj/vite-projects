import React from "react";
import TodoReduxToolKit from "./projects/todoreduxtoolkit/TodoReduxToolKit";
import { Provider } from "react-redux";
import { store } from "./projects/todoreduxtoolkit/app/store";

const App = () => {
  return (
    <div className="container-fluid p-0">
      {/* ===== Project-8 redux, redux-tool-kit, Localstorage - START =====*/}
      <Provider store={store}>
        <TodoReduxToolKit />
      </Provider>
      ,{/* ===== Project-8 - END =====*/}
    </div>
  );
};

export default App;
