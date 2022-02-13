import { useState } from "react";

import "./style/Modal.css";

function Modal({ label, children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  if (!open)
    return (
      <button className="Modal-button" onClick={toggle}>
        {label}
      </button>
    );
  return (
    <div className="Modal-root">
      <div className="Modal-content">{children}</div>
      <div className="Modal-actions">
        <button className="Modal-button" onClick={toggle}>
          Tres bien, Merci
        </button>
      </div>
    </div>
  );
}

export default Modal;