import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Message(props) {
  const [formObject, setFormObject] = useState({});
  const [message, setMessage] = useState(props.match.params.message);

  // const secret = props.match.params.message;
  // console.log(secret);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.encryptKey) {
      // TODO
      // encrypt the message
      // const newMessage = encrypt(formObject.normMessage, formObject.encryptKey);
      // navigate to "/decrypted-message"
      // props.history.push(`/${newMessage}`);
      setMessage(decrypt(message, formObject.encryptKey))
    }
  }

  function decrypt(message, key) {
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i) - parseInt(key, 10);

      decryptedMessage += String.fromCharCode(charCode);
    }
    return decryptedMessage;
  }

  return (
    <>
      {message}
      <Form>
        <Form.Group controlId="encryptKey">
          <Form.Label>Enter the encryption key</Form.Label>
          <Form.Control
            name="encryptKey"
            onChange={handleInputChange}
            placeholder="Enter key (integer)"
            type="number"
          />
          <Form.Text className="text-muted">
            The person who sent this link should have told you the key.
          </Form.Text>
        </Form.Group>

        <Button
          disabled={!formObject.encryptKey}
          onClick={handleFormSubmit}
          type="submit"
          variant="primary"
        >
          Decrypt
        </Button>
      </Form>
    </>
  );
}
