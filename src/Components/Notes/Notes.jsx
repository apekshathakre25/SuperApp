import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";

const Notes = () => {
  const [notesData, setNotesData] = useState(" ");

  const handleSaveNotes = (event) => {
    setNotesData(event.target.value);
    localStorage.setItem("notes", JSON.stringify(notesData))
  };

  useEffect(() => {
   const notes = localStorage.getItem("notes")

   if(notes){
    setNotesData(JSON.parse(notes))
   }
  }, [ ]);

  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        height: "47vh",
        width: "30vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
      }}>
      <p style={{ color: "black", fontSize: "2rem" }}>All notes</p>
      <textarea
        style={{
          width: "28vw",
          height: "50vh",
          margin: "auto",
          border: "none",
          background: "transparent",
          outline: 0,
        }}
        value={notesData}
        onChange={handleSaveNotes}
      />
    </div>
  );
};

export default Notes;
