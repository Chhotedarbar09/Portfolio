import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const formRef = useRef();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // 🛑 Honeypot spam check
    if (formRef.current.botcheck.value !== "") return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_tmqsoij",     // 👈 Service ID
        "template_k8hefum",    // 👈 Template ID
        formRef.current,
        "rio4Gmf9zoTfqyTD4"       // Public Key
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();

        // ⏳ Redirect to Home after 3 seconds
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="min-h-screen pt-24 px-6 bg-[#1e1e1e] text-white flex items-center justify-center">

      {/* ✅ SUCCESS ANIMATION */}
      {success ? (
        <div className="flex flex-col items-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center text-black text-4xl mb-4 animate-scale">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-teal-400">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-400 mt-2">
            Redirecting to home page...
          </p>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full max-w-xl bg-[#262626] p-8 rounded-2xl space-y-6 shadow-lg"
        >
          {/* 🕵️ Honeypot */}
          <input
            type="text"
            name="botcheck"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <h1 className="text-3xl font-bold text-center text-teal-400">
            Contact Me
          </h1>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded bg-[#1e1e1e] border border-gray-700"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded bg-[#1e1e1e] border border-gray-700"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded bg-[#1e1e1e] border border-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold py-3 rounded transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
