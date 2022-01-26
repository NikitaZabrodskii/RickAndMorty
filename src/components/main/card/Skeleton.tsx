import React from "react";

export const Skeleton = () => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <img alt="img" className="skeleton__img" />
        <div className="skeleton">
          <p className="skeleton__name"></p>
          <p className="skeleton__gender"></p>
          <p className="skeleton__status"> </p>
          <p className="skeleton__type"> </p>
        </div>
      </div>
    </div>
  );
};
