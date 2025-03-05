import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://fullstackbackendsumit-production.up.railway.app/") // Replace with actual backend URL
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`You entered: ${input}`);
  };

  return (
    <motion.div 
      className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-light"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="card shadow p-5 text-center rounded" 
        style={{ maxWidth: "500px", borderRadius: "15px" }}
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h1 className="text-primary fw-bold">🚀 Fullstack App</h1>
        <h4 className="text-success mt-3">{message || "Loading..."}</h4>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Enter something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary shadow-sm">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default App;
