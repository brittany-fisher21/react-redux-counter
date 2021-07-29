import React from "react";
import Output from "../containers/OutputContainer";
import Increment from "../containers/IncrementContainer";

const CounterApp = (props) => (
  <div>
    <h1>The Most Amazing Counter App Ever</h1>
    <Output />
    <Increment />
  </div>
);

export default CounterApp;
