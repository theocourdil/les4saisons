import React from "react";
import { useState } from "react";

import useStyles from "./style/Modal.style";

function Modal({ label, children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const classes = useStyles();
  if (!open)
    return (
      <button className={classes.button} onClick={toggle}>
        {label}
      </button>
    );
  return (
    <div className={classes.root}>
      <div className={classes.content}>{children}</div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={toggle}>
          Tres bien, Merci
        </button>
      </div>
    </div>
  );
}

export default Modal;
