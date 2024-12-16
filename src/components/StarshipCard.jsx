import React from "react";
import ProTypes from "prop-types";

function StarshipCard({ name }) {
  return (
    <div className="Starship-card">
      <h2>{name}</h2>{" "}
    </div>
  );
}

export default StarshipCard;
