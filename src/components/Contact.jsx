import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 md:px-20"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-6 text-white">

          <h2 className="text-5xl font-bold leading-tight">
            Let’s Build <br /> Something Great
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Have an idea, project, or collaboration in mind?  
            I’d love to hear from you and bring it to life with clean modern development.
          </p>

          <div className="flex flex-col gap-3 text-gray-300">
            <span>✉ Email: hello@joycoders.com</span>
            <span>📍 Egypt</span>
            <span>⚡ Response within 24h</span>
          </div>

        </div>

        {/* RIGHT SIDE - GLASS FORM */}
        <div className="relative">

          {/* glow background */}
          <div className="absolute inset-0 bg-gray-700/20 blur-3xl rounded-3xl"></div>

          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/40 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:border-gray-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/40 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:border-gray-400"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="bg-black/40 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:border-gray-400"
            ></textarea>

<a
  href="https://wa.me/201208630335"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 inline-flex items-center justify-center gap-2 bg-green-500 text-black font-semibold py-3 px-4 rounded-xl hover:bg-green-600 transition"
>
  <FaWhatsapp className="text-lg" />
  Send a message on WhatsApp
</a>

          </div>
        </div>

      </div>
    </div>
  );
}