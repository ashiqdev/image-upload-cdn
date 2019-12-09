import React from "react";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";
import Upload from './components/Upload'
import Images from "./components/Images";

const App = () => {
  return (
    <>
    <Upload/>

    <div>
      <h3>Images...</h3>
      <Images/>
    </div>

    </>
  );
};

export default App;
