export default function Skills() {
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center px-6 md:px-20 py-20">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">
          My Skills
        </h2>
        <p className="text-gray-400 text-lg">
          Technologies and frameworks I specialize in
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-8">

        <div className="flex-1 bg-[#0f172a] p-8 rounded-2xl border border-blue-700 hover:scale-105 transition">

          <div className="flex items-center gap-3 mb-6">
            <i className="fa-solid fa-code text-blue-500 text-3xl"></i>
            <h2 className="text-2xl font-bold text-white">Frontend</h2>
          </div>

          <ul className="space-y-3 text-gray-300">

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              HTML <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              CSS <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              JavaScript <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
              Tailwind CSS <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              jQuery <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
              Bootstrap <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              React <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

          </ul>

        </div>

        <div className="flex-1 bg-[#0f172a] p-8 rounded-2xl border border-blue-700 hover:scale-105 transition">

          <div className="flex items-center gap-3 mb-6">
            <i className="fa-solid fa-server text-blue-500 text-3xl"></i>
            <h2 className="text-2xl font-bold text-white">Backend</h2>
          </div>

          <ul className="space-y-3 text-gray-300">

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              PHP <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              MySQL <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              Laravel <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              OOP <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-pink-500"></span>
              MVC <span className="text-blue-400 text-sm ml-auto">1 Year</span>
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}