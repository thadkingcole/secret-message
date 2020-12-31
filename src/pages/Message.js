import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default function Message(props) {
  const [formObject, setFormObject] = useState({});
  // get the message from the url/:message
  const [message, setMessage] = useState(props.match.params.message);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // when form is submitted...
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.encryptKey) {
      // decrypt the message
      setMessage(decrypt(message, formObject.encryptKey));
    }
  }

  // decrypt function: inverse of encrypt function
  function decrypt(message, key) {
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i) - parseInt(key, 10);

      decryptedMessage += String.fromCharCode(charCode);
    }
    return decryptedMessage;
  }

  function goHome() {
    props.history.push("/");
  }

  return (
    <>
      {/* Message goes here */}
      <h1 className="mb-5">{message}</h1>

      {/* Decryption form */}
      <Form>
        <Form.Label>Enter the encryption key</Form.Label>
        <InputGroup controlid="encryptKey">
          <Form.Control
            name="encryptKey"
            onChange={handleInputChange}
            placeholder="Enter key (integer)"
            type="number"
          />
          <InputGroup.Append>
            <Button
              disabled={!formObject.encryptKey}
              onClick={handleFormSubmit}
              type="submit"
              variant="primary"
            >
              Decrypt
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Form.Text className="text-muted">
          The person who sent this link should tell you the key.
        </Form.Text>
      </Form>

      <Button
        className="mt-5"
        onClick={goHome}
        variant="warning"
      >
        Make a new message
      </Button>
    </>
  );
}
