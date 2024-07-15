import React, { useState } from 'react';

function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "6d68aa48-24dd-45ac-9a63-f6c786abf77a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to submit form");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Submit Form</button>
      </form>
      
      <p>{result}</p>
    </div>
  );
}

export default Form;
