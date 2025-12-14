export default function Hero({onViewProjectsClick}) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#1e1e1e] text-gray-200 px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Small Welcome Text */}
        <p className="text-teal-400 font-medium tracking-widest">
          👋 Hi, I’m Digvijaysinh Atodariya
        </p>

        {/* Big Heading */}
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
          I'm a <span className="text-teal-400">Full-Stack Developer</span> <br />
          building clean & modern web experiences.
        </h1>

        {/* Short Description */}
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          I specialize in creating high-quality, responsive websites using 
          <span className="text-teal-400"> React</span>, 
          <span className="text-teal-400"> Redux</span>, and 
          <span className="text-teal-400"> Tailwind CSS</span>.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-5">
          
          {/* View Projects Button */}
          <button type="button" onClick={onViewProjectsClick} className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-full hover:bg-teal-300 transition shadow-lg shadow-teal-500/20"> View Projects</button>
            
         
          

          {/* GitHub Button */}
          <a
            href="https://github.com/chhotedarbar09"
            target="_blank"
            className="px-6 py-3 border border-teal-400 text-teal-400 font-semibold rounded-full hover:bg-teal-400 hover:text-black transition"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
