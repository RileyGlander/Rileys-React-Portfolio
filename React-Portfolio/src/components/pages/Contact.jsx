import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, subject, message } = formData;
    if (!firstName || !lastName || !email || !subject || !message) {
      setErrorMessage("Missing Information");
      return;
    }
    setErrorMessage("");
    alert(`Email: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nSubject: ${subject}\nMessage: ${message}`);
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="form-section">
      <div className="form">
        <h3>Want to get in contact?</h3>
        <p>Feel free to contact me. You can get ahold of me at my email <u>rileyglander@gmail.com</u></p>

        <form onSubmit={handleFormSubmit}>
          {["first Name", "last Name", "email", "subject", "message"].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <button type="submit">Send Message</button>
          {errorMessage && (
            <div className="error-message">ERROR: {errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
