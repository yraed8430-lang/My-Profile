import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gray-800/20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">YOuSef</h1>
          <p className="text-gray-400 leading-relaxed">
            We build modern digital experiences with clean design and powerful code.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 text-gray-300">
        <a href="#skills" className="hover:text-white cursor-pointer">
  Skills
</a>

<a href="#projects" className="hover:text-white cursor-pointer">
  Projects
</a>

<a href="#about" className="hover:text-white cursor-pointer">
  About
</a>

<a href="#contact" className="hover:text-white cursor-pointer">
  Contact
</a></div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Social</h2>

          <div className="flex gap-3 mt-2">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/yousef.raed.954417"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/__y_o_u_s_e_f_r_a_e_d___/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} JoyCoders. All rights reserved.
      </div>

    </footer>
  );
}