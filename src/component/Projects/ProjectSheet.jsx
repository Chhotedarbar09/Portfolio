export default function ProjectsSheet({ children, onClose }) {
  return (
    <>
      {/* Dark overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-5xl bg-[#111] border-t border-gray-700 rounded-t-2xl shadow-2xl overflow-hidden">
          
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <span className="text-sm text-gray-400">
              My Projects
            </span>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-teal-400 text-sm"
            >
              Close ✕
            </button>
          </div>

          {/* Scrollable content */}
          <div className="max-h-[70vh] overflow-y-auto px-4 py-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
