import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-gray-900/90 backdrop-blur shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        
        {/* Logo */}
        <h1 className="font-bold text-xl">
          <i className="fa-solid text-blue-500 fa-code"></i> YOUSEF
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <li className="text-[17px]" key={link.name}>
              <a href={link.href} className="hover:text-blue-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur text-white border-t border-gray-800">
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}