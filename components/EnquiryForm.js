"use client";
import { useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", subject: "", message: "" });

  function update(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("Thanks! We received your enquiry and will reach out shortly.");
        setForm({ name: "", email: "", whatsapp: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong. Please WhatsApp us directly instead.");
      }
    } catch (err) {
      setStatus("Something went wrong. Please WhatsApp us directly instead.");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <h3>Send an Enquiry</h3>
      <label>Name <input type="text" value={form.name} onChange={update("name")} required /></label>
      <label>Email <input type="email" value={form.email} onChange={update("email")} required /></label>
      <label>WhatsApp Number <input type="tel" value={form.whatsapp} onChange={update("whatsapp")} required /></label>
      <label>Subject <input type="text" value={form.subject} onChange={update("subject")} /></label>
      <label>Message <textarea rows="4" value={form.message} onChange={update("message")}></textarea></label>
      <button type="submit" className="btn btn-primary">Submit</button>
      <p className="form-status">{status}</p>
    </form>
  );
}
