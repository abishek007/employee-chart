// Library Imports
import React from "react";

// Style Imports
import "./styles.scss";

const HierarchyCard = ({ data: { img_src, name, designation, team } }) => (
  <div className="preview-card">
    <div className="picture-section">
      <img src={img_src} alt="Employee photo" className="card-img" />
    </div>
    <div className="info-section">
      <p className="item title">{name}</p>
      <p className="item">{designation}</p>
      <p className="item">{team}</p>
    </div>
  </div>
);

export default HierarchyCard;
