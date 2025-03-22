import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);
  const handleOutsideClick=(e)=>{
     if (e.target === e.currentTarget) {
       setIsModalOpen(false);
     }
  }
  return (
    <main>
      <h1 className="heading">User Modal Details</h1>
      <button
        className="submit-button"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        Open Form
      </button>
      {isModalOpen && (
        <div className="modal-backdrop" onClick={handleOutsideClick}>
          <Modal setIsModalOpen={setIsModalOpen} />
        </div>
      )}
    </main>
  );
}

export default App;
