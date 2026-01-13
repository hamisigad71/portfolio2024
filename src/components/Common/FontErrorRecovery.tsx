"use client";

import { useEffect } from "react";
import { useNetworkError } from "./NetworkErrorProvider";

// Font Error Recovery Component
export const FontErrorRecovery: React.FC = () => {
  const { markAsOffline } = useNetworkError();

  useEffect(() => {
    const handleFontError = () => {
      console.warn("Font loading error detected");
      markAsOffline();
    };

    // Monitor for font loading errors
    const checkFontLoading = () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready
          .then(() => {
            // Check if fonts actually loaded
            const testElement = document.createElement("span");
            testElement.style.fontFamily = "Material Symbols Outlined";
            testElement.textContent = "test";
            testElement.style.position = "absolute";
            testElement.style.left = "-9999px";
            document.body.appendChild(testElement);

            const rect = testElement.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
              handleFontError();
            }

            document.body.removeChild(testElement);
          })
          .catch(handleFontError);
      } else {
        // Fallback for browsers without font loading API
        setTimeout(() => {
          const links = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
          links.forEach((link) => {
            const linkElement = link as HTMLLinkElement;
            if (!linkElement.sheet) {
              handleFontError();
            }
          });
        }, 3000);
      }
    };

    // Check after a delay to ensure fonts have had time to load
    const timer = setTimeout(checkFontLoading, 2000);

    return () => clearTimeout(timer);
  }, [markAsOffline]);

  return null;
};

export default FontErrorRecovery;
