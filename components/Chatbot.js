"use client";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me about solar, security systems, IT hardware, AMC, or government supply. For pricing, I'll route you to WhatsApp." }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  async function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { role: "user", text }]);
    setInput("");
    try {
      const res = await fetch("/api/chatbot/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      setMessages(m => [...m, { role: "bot", text: data.reply }]);
    } catch (err) {
      setMessages(m => [...m, { role: "bot", text: "Sorry, something went wrong. Please message us on WhatsApp instead." }]);
    }
  }

  return (
    <div className="chatbot-widget">
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>Ask Vel Systems AI</button>
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            Vel Systems Assistant
            <button aria-label="Close" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={m.role === "bot" ? "bot-msg" : "user-msg"}>{m.text}</div>
            ))}
          </div>
          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              autoComplete="off"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
