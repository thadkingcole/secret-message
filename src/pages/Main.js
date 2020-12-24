import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Main() {
  const [formObject, setFormObject] = useState({});

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted...
  // encrypt the message
  // navigate to "/decrypted-message"
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.normMessage && formObject.encryptKey) {
      // TODO
      // encrypt the message
      // navigate to "/decrypted-message"
    }
  }

  return (
    <>
      <Form>
        <Form.Group controlId="normMessage">
          <Form.Label>Type the message you want to encrypt</Form.Label>
          <Form.Control
            name="normMessage"
            onChange={handleInputChange}
            placeholder="Enter message"
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="encryptKey">
          <Form.Label>Choose an encryption key</Form.Label>
          <Form.Control
            name="encryptKey"
            onChange={handleInputChange}
            placeholder="Enter key (integer)"
            type="number"
          />
          <Form.Text className="text-muted">
            Remember this key; It is needed in order to decrypt the message.
          </Form.Text>
        </Form.Group>

        <Button
          disabled={!(formObject.normMessage && formObject.encryptKey)}
          onClick={handleFormSubmit}
          type="submit"
          variant="primary"
        >
          Encrypt
        </Button>
      </Form>
    </>
  );
}
