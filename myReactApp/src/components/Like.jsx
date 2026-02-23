import React, { useState } from "react";

function Like() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
      }}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

export default Like;
