// Library Imports
import React from "react";

// Constant Imports
import { CARD_SHIMMER_COUNT } from "./constants";

// Style Imports
import "./styles.scss";

const Shimmer = () => (
  <>
    {Array(CARD_SHIMMER_COUNT)
      .fill(1)
      .map((_, ind) => (
        <div className="card" key={`loader-${ind}`}>
          <div className="animate photo-loader"></div>
          <div className="info-loader-container">
            <div className="animate info-loader"></div>
            <div className="animate info-loader"></div>
            <div className="animate info-loader"></div>
            <div className="animate info-loader"></div>
          </div>
        </div>
      ))}
  </>
);

export default Shimmer;
