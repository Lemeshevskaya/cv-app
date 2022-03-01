import React from "react";

import { Info } from "./components";

import "../assets/styles/modules/_box.scss";

export function Box(props) {
  return (
    <div className="box">
      <h2 className="box__title">{props.title}</h2>
      {props.content && <Info data={props.content} />}
      {props.children}
    </div>
  );
}