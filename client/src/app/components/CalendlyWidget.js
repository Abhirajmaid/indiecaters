"use client";

import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly scripts
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/archanajgore/indiecaters'
      });
    } else {
      // If Calendly hasn't loaded yet, wait a bit and try again
      setTimeout(() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/archanajgore/indiecaters'
          });
        }
      }, 500);
    }
  };

  return (
    <div
      style={{ zIndex: 50 }}
      className="fixed bottom-6 right-6 flex flex-col items-center group"
    >
      <button
        onClick={handleCalendlyClick}
        className="bg-[#ce7c8a] hover:bg-[#b85c6d] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none"
        aria-label="Schedule a Calendly Meet"
      >
        {/* Calendar Icon SVG */}
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.3} viewBox="0 0 24 24">
          <rect x="4" y="5" width="16" height="15" rx="3" stroke="currentColor" />
          <path d="M16 3v4M8 3v4M4 11h16" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </button>
      <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none bg-white text-[#ce7c8a] rounded-lg px-4 py-2 text-xs font-semibold mt-2 transition-opacity absolute bottom-16 right-0 z-20 shadow-lg select-none whitespace-nowrap">
        Book your slot
      </div>
    </div>
  );
}
