import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./NoteModal.css";

export default function NoteModal({ note, onClose, onUpdate }) {
    let isOpen;
    if (note) {
    isOpen = true;
    } else {
    isOpen = false;
    }

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingText, setIsEditingText] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

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
    onUpdate?.(note, { title, text });
    setIsEditingTitle(false);
    setIsEditingText(false);
  };
  console.log(title);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="note-modal__overlay"
      className="note-modal"
      contentLabel="Note details"
    >
      {note && (
        <div className="note-modal__content">
          <div className="note-modal__header">
            <strong className="note-modal__date">{note.date}</strong>
            <button
              type="button"
              className="note-modal__icon-btn"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {isEditingTitle ? (
            <input
              className="note-modal__title-input"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setIsEditingTitle(false)}
              onKeyDown={(e) => e.key === "Enter" && setIsEditingTitle(false)}
              placeholder="Title…"
            />
          ) : (
            <h3
              className="note-modal__title"
              onDoubleClick={() => setIsEditingTitle(true)}
            >
              {note.title || "(No title)"}
            </h3>
          )}

          {isEditingText ? (
            <textarea
              className="note-modal__text-input"
              autoFocus
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.ctrlKey && e.key === "Enter") handleSave();
              }}
              placeholder="Write your note…"
            />
          ) : (
            <p
              className="note-modal__text"
              onDoubleClick={() => setIsEditingText(true)}
            >
              {note.text}
            </p>
          )}

          {note.updatedAt && (
            <small className="note-modal__muted">
              Updated: {note.updatedAt}
            </small>
          )}

          <div className="note-modal__actions">
            <button
              type="button"
              className="note-modal__primary-btn"
              onClick={handleSave}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
