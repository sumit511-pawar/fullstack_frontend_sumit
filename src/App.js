import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://fullstackappsumit-production.up.railway.app/") // Replace with your actual backend URL
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Fullstack App</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
