import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    body: "",
  });

  function handleChange(e) {
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
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
        </div>
        <textarea
          type="text"
          name="body"
          id="body"
          cols="30"
          rows="10"
          value={form.body}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
