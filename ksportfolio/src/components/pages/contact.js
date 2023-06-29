import React, { useState } from "react";

const ContactForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleNameChange = e => {
    setNameValue(e.target.value);
  };

  const handleEmailChange = e => {
    setEmailValue(e.target.value);
  };

  const handleMessageChange = e => {
    setMessageValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setFormStatus("Submitting...");
  };

  return (
    <div>
      <h2>Contact me here</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleNameChange}
            className="form-control"
            value={nameValue}
            type="text"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            value={emailValue}
            onChange={handleEmailChange}
            className="form-control"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            value={messageValue}
            onChange={handleMessageChange}
            className="form-control"
            id="message"
            required
          />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
