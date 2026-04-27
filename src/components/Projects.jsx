import a from "../assets/لقطة شاشة 2026-04-17 000358.png";
import c from "../assets/download (2).jpg";
export default function Projects() {
  return (
    <div id="projects" className="min-h-screen px-6 md:px-20 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">
          Selected Work
        </h2>
        <p className="text-gray-400">
          A collection of my latest builds and experiments
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Project 1 */}
        <div className="sticky top-20 mb-10">
          <div className="bg-[#0f172a] border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
            <div className="md:flex">
              <img src={a} className="w-full md:w-1/2 h-64 object-cover" />

              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  E-Commerce Platform
                </h3>

                <p className="text-gray-400 mb-4">
                  Full stack store with cart & payments system.
                </p>

                <div className="flex gap-2 text-sm text-blue-400 mb-4">
                  <span>React</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                </div>

                <div className="flex gap-3">
                  <button className="bg-blue-700 px-4 py-2 rounded-lg text-white">
                    Code
                  </button>
                  <button className="border border-blue-700 px-4 py-2 rounded-lg text-blue-400">
                    Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="sticky top-20 mb-10">
          <div className="bg-[#0f172a] border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
            <div className="md:flex">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                className="w-full md:w-1/2 h-64 object-cover"
              />

              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Dashboard UI
                </h3>

                <p className="text-gray-400 mb-4">
                  Analytics dashboard with real-time data.
                </p>

                <div className="flex gap-2 text-sm text-blue-400 mb-4">
                  <span>React</span>
                  <span>Tailwind</span>
                  <span>API</span>
                </div>

                <div className="flex gap-3">
                  <button className="bg-blue-700 px-4 py-2 rounded-lg text-white">
                    Code
                  </button>
                  <button className="border border-blue-700 px-4 py-2 rounded-lg text-blue-400">
                    Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="sticky top-20 mb-10">
          <div className="bg-[#0f172a] border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
            <div className="md:flex">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                className="w-full md:w-1/2 h-64 object-cover"
              />

              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Portfolio Website
                </h3>

                <p className="text-gray-400 mb-4">
                  Modern animated personal portfolio.
                </p>

                <div className="flex gap-2 text-sm text-blue-400 mb-4">
                  <span>React</span>
                  <span>Tailwind</span>
                </div>

                <div className="flex gap-3">
                  <button className="bg-blue-700 px-4 py-2 rounded-lg text-white">
                    Code
                  </button>
                  <button className="border border-blue-700 px-4 py-2 rounded-lg text-blue-400">
                    Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="sticky top-20 mb-10">
          <div className="bg-[#0f172a] border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
            <div className="md:flex">
              <img src={c} className="w-full md:w-1/2 h-64 object-cover" />

              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Task Manager App
                </h3>

                <p className="text-gray-400 mb-4">
                  Productivity app for daily tasks.
                </p>

                <div className="flex gap-2 text-sm text-blue-400 mb-4">
                  <span>React</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                </div>

                <div className="flex gap-3">
                  <button className="bg-blue-700 px-4 py-2 rounded-lg text-white">
                    Code
                  </button>
                  <button className="border border-blue-700 px-4 py-2 rounded-lg text-blue-400">
                    Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
