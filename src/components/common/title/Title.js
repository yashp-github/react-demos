import React from "react";
import Proptypes from "prop-types";

function Title({title, subtitle}) {
  return (
    <div className="text-center">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

Title.propeTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string,
};

Title.defaultProps = {
  subtitle: '',
};

export default React.memo(Title);