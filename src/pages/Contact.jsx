import React, { useState } from "react";

export default function Contact() {
 const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
 });

 const [formErrors, setFormErrors] = useState({
    fullName: false,
    subject: false,
    email: false,
    body: false,
 })

 function handleChange(e) {
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
 }

 function validateForm() {
    let isValid = true;
    Object.keys(form).forEach(key => {
      if (form[key].length < 3) {
        setFormErrors(prevState => ({
          ...prevState,
          [key]: true
        }));
        isValid = false;
      } else {
        setFormErrors(prevState => ({
          ...prevState,
          [key]: false
        }));
      }
    });
    return isValid;
 }

 function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setFormErrors({
        fullName: false,
        subject: false,
        email: false,
        body: false,
      });
      console.log(form)
    }
 }

 return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          {formErrors.fullName && <p className="error">Error: Please ensure Full Name has a minimum length of 3 characters.</p>}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
          {formErrors.subject && <p className="error">Error: Please ensure Subject has a minimum length of 3 characters.</p>}
        </div>
        <div>
          <label htmlFor="subject">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="error">Error: Please ensure Email has a minimum length of 3 characters.</p>}
        </div>
        <div>
          <textarea
            type="text"
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={form.body}
            onChange={handleChange}
          />
          {formErrors.body && <p className="error">Error: Please ensure Body has a minimum length of 3 characters.</p>}
        </div>
        <button>Submit</button>
      </form>
    </div>
 );
}