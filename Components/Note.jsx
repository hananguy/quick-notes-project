import React from "react";
import './Note.css';

export default function Note({ idx, title, text, date, handleDeleteNote}) {

 const formattedDate = new Date(date).toLocaleString("en-US", {
    month:  "short",   
    day:    "numeric", 
    hour:   "numeric", 
    minute: "numeric"  
  });


  const handleClick = () =>
  {
      const ok = window.confirm("Are you sure you want to delete this note?");
         if (ok) {
        handleDeleteNote(idx);
         } 
  }
  return (
    <div key={idx} className="note-container">
        <div className="note">
            <strong>{formattedDate}</strong>
            <p class="title">{title}</p>
            <p class="text">{text}</p>
        </div>
        <button className="btn" onClick={handleClick}>X</button>
      
    </div>
  );
}