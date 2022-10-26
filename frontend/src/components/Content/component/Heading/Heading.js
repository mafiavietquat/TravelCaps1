import React from "react";
import "./Heading.scss";

const Heading = (props) => {
  const { head, title, desc } = props;
  return (
    <div className="headingContent">
      <h2 className="headingContent__head">{head}</h2>
      <h3 className="headingContent__title">{title}</h3>
      <p className="headingContent__desc">{desc}</p>
    </div>
  );
};

export default Heading;
