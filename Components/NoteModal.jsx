import React from "react";
import Modal from "react-modal";
import "./NoteModal.css";

export default function NoteModal({ note, onClose }) {

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingText,  setIsEditingText]  = useState(false);
    const [title, setTitle] = useState("");
    const [text,  setText]  = useState("");

    useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setText(note.text || "");
      setIsEditingTitle(false);
      setIsEditingText(false);
    }
  }, [note]);

  const handleSave = () => {
    if (!note) return;
    
    setIsEditingTitle(false);
    setIsEditingText(false);
  };

  const handleCancel = () => {
    if (!note) return;
    setTitle(note.title || "");
    setText(note.text || "");
    setIsEditingTitle(false);
    setIsEditingText(false);
  };



  const isOpen = !!note;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}         
      overlayClassName="modal-overlay"
      className="modal"
      contentLabel="Note details"
    >
      {note && (
        <div className="note-modal-content">
          <div className="note-header">
            <strong>{note.date}</strong>
            <button className="btn" onClick={onClose}>×</button>
          </div>

          {note.title && <h3 className="title">{note.title}</h3>}
          <p className="text">{note.text}</p>

       
          {/* {note.updatedAt && <small className="muted">Updated: {note.updatedAt}</small>} */}
        </div>
      )}
    </Modal>
  );
}
