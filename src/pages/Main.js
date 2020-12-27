import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Main(props) {
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
      // encrypt the message
      const newMessage = encrypt(formObject.normMessage, formObject.encryptKey);
      // navigate to "/:decrypted-message"
      props.history.push(`/${newMessage}`);
    }
  }

  // very basic "encryption"
  function encrypt(message, key) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i) + parseInt(key, 10);
      encryptedMessage += String.fromCharCode(charCode);
    }
    return encryptedMessage;
  }

  return (
    <>
      <Form>
        {/* Message to encrypt */}
        <Form.Group controlId="normMessage">
          <Form.Label>Type the message you want to encrypt</Form.Label>
          <Form.Control
            name="normMessage"
            onChange={handleInputChange}
            placeholder="Enter message"
            type="text"
          />
        </Form.Group>

        {/* Encryption key (must be an integer) */}
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

        {/* Encryption button */}
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
