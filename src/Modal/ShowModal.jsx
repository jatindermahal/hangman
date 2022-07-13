import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ShowModal.css"

export default function ShowModal({ title, body, reset }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleReset = () => {
    setShow(false);
    reset();
  };
  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={handleClose}
        className="modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleReset}>
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
