export default function Footer() {
  return (
    <footer className="mt-20 bg-[#1e1e1e] border-t border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-5 text-lg">
          <a
            href="https://github.com/Chhotedarbar09"
            className="hover:text-teal-400 transition"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href=""
            className="hover:text-teal-400 transition"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/darbarsaheb09/"
            className="hover:text-teal-400 transition"
            target="_blank"
          >
            Instagram
          </a>
        </div>

        {/* Divider (nice subtle line) */}
        <div className="w-24 h-[2px] bg-gray-700 mx-auto mb-4"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-teal-400 font-medium">Digvijaysinh</span> — All Rights Reserved
        </p>

        {/* Back to top */}
        <a
          href="#home"
          className="mt-3 inline-block text-xs text-gray-500 hover:text-teal-400 transition"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
}
