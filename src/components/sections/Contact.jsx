import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useRef } from "react";

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;

  //   emailjs
  //     .sendForm(SERVICE_ID, TEMPLATE_ID, form, event.target, PUBLIC_KEY)
  //     .then(() => {
  //       alert("Message sent successfully!");
  //       setFormData({ name: "", email: "", message: "" }); // Reset form
  //     })
  //     .catch(() => {
  //       alert("Failed to send message. Please try again later.");
  //     });
  // };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2
            className="text-3xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400
         bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </h2>
          <form
            ref={form}
            className="space-y-5"
            autoComplete="off"
            onSubmit={sendEmail}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-400"
                required
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-400"
                required
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Your Message"
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-400"
                required
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
