import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://your-railway-backend-url.onrender.com/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
    alert(`Server Response: ${data.message}`);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="text-primary">🚀 Fullstack App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter something"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3">Send</button>
      </form>
    </div>
  );
}

export default App;
