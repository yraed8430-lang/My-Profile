import { MdWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { SiAltiumdesigner } from "react-icons/si";

export default function Lastopj() {
  return (
    <div id="Lastopj" className="min-h-screen flex items-center px-6 md:px-20">

      <div className="flex flex-col md:flex-row justify-between w-full gap-12">

        {/* LEFT */}
        <div className="flex flex-col gap-6 md:w-1/2">

          <div className="bg-gray-800 h-9 w-44 rounded-full flex items-center gap-2 px-3">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-sm text-white">Founded in 2025</span>
          </div>

          <span className="text-5xl font-bold">JoyCoders</span>

          <p className="text-lg">
            A software development company focused on building remarkable digital experiences
          </p>

          <p className="leading-relaxed text-gray-300">
            At JoyCoders, we combine technical expertise with creative vision to deliver software solutions that exceed expectations.
          </p>

          <button className="w-48 h-12 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Visit JoyCoders
          </button>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex justify-center">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="p-6 bg-gray-800 text-white rounded-xl shadow-lg hover:scale-105 transition transform">
              <MdWeb size={28} className="mb-3 text-blue-400" />
              <b className="text-lg">Full Stack Web Development</b>
              <p className="text-sm mt-2 text-gray-300">
                Custom websites and web applications built with modern technologies for optimal performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gray-800 text-white rounded-xl shadow-lg hover:scale-105 transition transform">
              <SiAltiumdesigner size={26} className="mb-3 text-pink-400" />
              <b className="text-lg">UI/UX Design</b>
              <p className="text-sm mt-2 text-gray-300">
                Clean and modern interfaces focused on user experience and usability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gray-800 text-white rounded-xl shadow-lg md:col-span-2 hover:scale-105 transition transform">
              <FaDatabase size={26} className="mb-3 text-green-400" />
              <b className="text-lg">Backend Development</b>
              <p className="text-sm mt-2 text-gray-300">
                Powerful backend systems, APIs, and databases built for speed and scalability.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}