import React from "react";

const ListComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item + "-" + index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
