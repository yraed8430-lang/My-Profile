export default function Header() {
  return (
    <div className="Header h-screen flex flex-col items-center justify-center text-center px-4">
      
      <div className="masek-elheader flex flex-col gap-5">
        <p className="text-7xl">YOUSEF RAED</p>
        <p className="text-lg md:text-xl mb-6">
          Full-stack Developer | Founder of <span className="text-white text-2xl font-bold">Yousef</span>
        </p>

        <div className="flex flex-col justify-center md:flex-row gap-4 items-center">
          
<a href="#projects">
  <button className="bg-blue-700 py-3 px-5 rounded-xl text-white hover:bg-blue-800 transition">
    See My Work
  </button>
</a>

<a href="#contact">
  <button className="py-3 px-5 border border-blue-700 rounded-xl text-blue-700 hover:bg-blue-700 hover:text-white transition">
    Contact Me
  </button>
</a>

        </div>
      </div>
<div className="absolute bottom-10">
  <i className="fa-solid fa-arrow-down text-white text-3xl animate-arrow"></i>
</div>   </div>
  );
}