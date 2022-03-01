import React from "react";

import "../assets/styles/modules/_timeline.scss";

export function TimeLine({ data }) {
  if (!data) {
    return (
      <p className="timeLine__error">
        Something went wrong; please review your server connection!
      </p>
    );
  }

  const dataTimeline = data.map((item, i) => ({ id: i, event: item }));

  return (
    <div className="timeline">
      <ul className="timeline__list">
        {dataTimeline.map((datatl) => (
          <li className="timeline__item" key={datatl.id}>
            <div className="timeline__date">{datatl.event.date}</div>
            <div className="timeline__event">
              <h3 className="timeline__title">{datatl.event.title}</h3>
              <p className="timeline__text">{datatl.event.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}