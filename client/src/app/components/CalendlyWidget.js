import React from "react";

export default function CalendlyWidget({ onClick }) {
  return (
    <div
      style={{ zIndex: 50 }}
      className="fixed bottom-6 right-6 flex flex-col items-center group"
    >
      <button
        onClick={onClick}
        className="bg-[#eab9c1] hover:bg-[#ce7c8a] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none"
        aria-label="Schedule a Calendly Meet"
      >
        {/* Calendar Icon SVG */}
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.3} viewBox="0 0 24 24">
          <rect x="4" y="5" width="16" height="15" rx="3" stroke="currentColor" />
          <path d="M16 3v4M8 3v4M4 11h16" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </button>
      <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none bg-white text-[#eab9c1] rounded-lg px-4 py-2 text-xs font-semibold mt-2 transition-opacity absolute bottom-16 right-0 z-20 shadow-lg select-none whitespace-nowrap">
        Schedule a Meet
      </div>
    </div>
  );
}
