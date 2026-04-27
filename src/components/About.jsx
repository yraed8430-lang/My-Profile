import img from "../assets/WhatsApp Image 2026-03-26 at 4.00.53 PM.jpeg";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center px-6 md:px-20">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="flex-1">

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">
            About Me
          </h2>

          <p className="text-xl font-medium mb-4 text-gray-300">
            Passionate about creating elegant solutions to complex problems
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I'm a senior full-stack developer with extensive experience building scalable applications using modern technologies. With over 1 years in the industry, I've developed expertise in both frontend and backend development.
          </p>

          <p className="text-gray-400 leading-relaxed">
            As the founder of JoyCoders, I've led teams to deliver high-quality software solutions for clients across various industries. My approach combines technical excellence with a deep understanding of business needs.
          </p>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <img
            src={img}
            alt="About"
            className="rounded-2xl shadow-lg w-[300px] md:w-[380px] hover:scale-105 transition duration-300"
          />
        </div>

      </div>

      {/* 🔥 BOXS SECTION */}
      <div className="max-w-6xl w-full mt-20 flex flex-col md:flex-row gap-6">

        {/* Frontend */}
        <div className="flex-1 bg-[#0f172a] p-6 rounded-2xl border border-blue-700 hover:scale-105 transition">

          <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-code text-blue-500 text-2xl"></i>
            <h3 className="text-xl font-bold text-white">Frontend</h3>
          </div>

          <ul className="text-gray-300 space-y-2">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>

        </div>

        {/* Backend */}
        <div className="flex-1 bg-[#0f172a] p-6 rounded-2xl border border-blue-700 hover:scale-105 transition">

          <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-server text-blue-500 text-2xl"></i>
            <h3 className="text-xl font-bold text-white">Backend</h3>
          </div>

          <ul className="text-gray-300 space-y-2">
            <li>Laravel</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>

        </div>

        {/* Tools */}
        <div className="flex-1 bg-[#0f172a] p-6 rounded-2xl border border-blue-700 hover:scale-105 transition">

          <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-layer-group text-blue-500 text-2xl"></i>
            <h3 className="text-xl font-bold text-white">Tools</h3>
          </div>

          <ul className="text-gray-300 space-y-2">
            <li>Git & GitHub</li>
            <li>REST APIs</li>
            <li>VS Code</li>
          </ul>

        </div>

      </div>

    </div>
  );
}