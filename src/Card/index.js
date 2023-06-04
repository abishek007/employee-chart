// Library Imports
import React from "react";

// Style Imports
import "./styles.scss";

const LabelValue = ({ label, value }) => (
  <div className="wrapper">
    <p className="label">{label}</p>
    <p className="value">{value}</p>
  </div>
);

const Card = ({
  data: { id, name, designation, team, img_src, manager_name },
}) => (
  <div className="card">
    <div className="picture-container">
      <img src={img_src} alt="Employee photo" />
    </div>
    <div className="info-container">
      <LabelValue label="Employee Id" value={id} />
      <LabelValue label="Name" value={name} />
      <LabelValue label="Designation" value={designation} />
      {team && <LabelValue label="Team" value={team} />}
      {manager_name && <LabelValue label="Manager" value={manager_name} />}
    </div>
  </div>
);

export default Card;
