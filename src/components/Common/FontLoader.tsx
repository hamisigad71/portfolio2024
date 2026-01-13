"use client";

import React, { useEffect, useState } from "react";

interface FontLoaderProps {
  children?: React.ReactNode;
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const loadFonts = async () => {
      try {
        // Check if fonts are already loaded
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
          setFontsLoaded(true);
          return;
        }

        // Fallback: Load Google Fonts with error handling
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap";

        // Set timeout for font loading
        timeoutId = setTimeout(() => {
          setFontError(true);
          setFontsLoaded(true); // Still set to true to show content with fallback fonts
        }, 5000); // 5 second timeout

        link.onload = () => {
          clearTimeout(timeoutId);
          setFontsLoaded(true);
        };

        link.onerror = () => {
          clearTimeout(timeoutId);
          setFontError(true);
          setFontsLoaded(true); // Show content with fallback fonts
        };

        // Only append if not already exists
        if (!document.querySelector(`link[href="${link.href}"]`)) {
          document.head.appendChild(link);
        }

      } catch (error) {
        console.warn("Font loading failed, using fallbacks:", error);
        setFontError(true);
        setFontsLoaded(true);
      }
    };

    // Load fonts with a small delay to prevent blocking
    const delayedLoad = setTimeout(loadFonts, 100);

    return () => {
      clearTimeout(delayedLoad);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Inject fallback CSS for Material Symbols
  useEffect(() => {
    if (fontError) {
      const style = document.createElement("style");
      style.textContent = `
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined', 'Material Icons', 'Font Awesome 5 Free', 'Font Awesome 5 Pro', Arial, sans-serif !important;
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Fallback icons using Unicode symbols */
        .material-symbols-outlined:empty:before {
          content: "○";
        }

        .material-symbols-outlined[data-icon="menu"]:empty:before {
          content: "☰";
        }

        .material-symbols-outlined[data-icon="close"]:empty:before {
          content: "✕";
        }

        .material-symbols-outlined[data-icon="search"]:empty:before {
          content: "🔍";
        }

        .material-symbols-outlined[data-icon="arrow_forward"]:empty:before {
          content: "→";
        }

        .material-symbols-outlined[data-icon="arrow_back"]:empty:before {
          content: "←";
        }

        .material-symbols-outlined[data-icon="expand_more"]:empty:before {
          content: "▼";
        }

        .material-symbols-outlined[data-icon="expand_less"]:empty:before {
          content: "▲";
        }

        .material-symbols-outlined[data-icon="home"]:empty:before {
          content: "🏠";
        }

        .material-symbols-outlined[data-icon="email"]:empty:before {
          content: "✉";
        }

        .material-symbols-outlined[data-icon="phone"]:empty:before {
          content: "📞";
        }

        .material-symbols-outlined[data-icon="location_on"]:empty:before {
          content: "📍";
        }

        .material-symbols-outlined[data-icon="star"]:empty:before {
          content: "⭐";
        }

        .material-symbols-outlined[data-icon="favorite"]:empty:before {
          content: "♥";
        }

        .material-symbols-outlined[data-icon="share"]:empty:before {
          content: "⤴";
        }

        .material-symbols-outlined[data-icon="download"]:empty:before {
          content: "⬇";
        }

        .material-symbols-outlined[data-icon="upload"]:empty:before {
          content: "⬆";
        }

        .material-symbols-outlined[data-icon="edit"]:empty:before {
          content: "✎";
        }

        .material-symbols-outlined[data-icon="delete"]:empty:before {
          content: "🗑";
        }

        .material-symbols-outlined[data-icon="settings"]:empty:before {
          content: "⚙";
        }

        .material-symbols-outlined[data-icon="info"]:empty:before {
          content: "ℹ";
        }

        .material-symbols-outlined[data-icon="warning"]:empty:before {
          content: "⚠";
        }

        .material-symbols-outlined[data-icon="error"]:empty:before {
          content: "⚠";
        }

        .material-symbols-outlined[data-icon="check"]:empty:before {
          content: "✓";
        }

        .material-symbols-outlined[data-icon="check_circle"]:empty:before {
          content: "✅";
        }

        .material-symbols-outlined[data-icon="cancel"]:empty:before {
          content: "❌";
        }

        .material-symbols-outlined[data-icon="add"]:empty:before {
          content: "+";
        }

        .material-symbols-outlined[data-icon="remove"]:empty:before {
          content: "−";
        }

        .material-symbols-outlined[data-icon="visibility"]:empty:before {
          content: "👁";
        }

        .material-symbols-outlined[data-icon="visibility_off"]:empty:before {
          content: "🙈";
        }
      `;

      document.head.appendChild(style);
    }
  }, [fontError]);

  // Show content regardless of font loading status
  // This ensures the app doesn't get stuck waiting for fonts
  return (
    <>
      {children}
      {/* Optional: Show a subtle indicator if fonts failed to load */}
      {fontError && process.env.NODE_ENV === "development" && (
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            background: "rgba(255, 193, 7, 0.9)",
            color: "#000",
            padding: "4px 8px",
            fontSize: "12px",
            borderRadius: "4px",
            zIndex: 1000,
            fontFamily: "monospace",
          }}
        >
          Fonts: Fallback mode
        </div>
      )}
    </>
  );
};

export default FontLoader;
