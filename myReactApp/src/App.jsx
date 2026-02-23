import React, { useState } from "react";
import Item from "./components/Item";
function App() {
  const [items] = useState([
    { id: 1, title: "First Post", body: "This is the first post." },
    { id: 2, title: "Second Post", body: "This is the second post." },
    { id: 3, title: "Third Post", body: "This is the third post." },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts List</h2>

      {items.map((item) => (
        <Item key={item.id} title={item.title} body={item.body} />
      ))}
    </div>
  );
}

export default App;
