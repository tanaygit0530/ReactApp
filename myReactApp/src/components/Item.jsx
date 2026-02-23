import React from "react";
import Like from "./Like";
function Item({ title, body }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
      <Like />
    </div>
  );
}

export default Item;
