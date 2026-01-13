"use client";

import { useEffect } from "react";

const ClientFontHandler = () => {
  useEffect(() => {
    // Handle font loading gracefully with error recovery
    const handleFontLoading = () => {
      const timeout = setTimeout(() => {
        // Add error class if fonts don't load within 5 seconds
        document.body.classList.add('font-loading-error');
        console.warn('Font loading timeout - using fallback fonts');
      }, 5000);

      // Check if Font Loading API is supported
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready
          .then(() => {
            clearTimeout(timeout);
            console.log('Fonts loaded successfully');
          })
          .catch(() => {
            clearTimeout(timeout);
            document.body.classList.add('font-loading-error');
            console.warn('Font loading failed - using fallback fonts');
          });
      } else {
        // Fallback for browsers without Font Loading API
        // Check if font stylesheets loaded
        const checkStylesheets = () => {
          const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
          let allLoaded = true;

          fontLinks.forEach((link) => {
            try {
              if (!(link as HTMLLinkElement).sheet) {
                allLoaded = false;
              }
            } catch (e) {
              allLoaded = false;
            }
          });

          if (allLoaded) {
            clearTimeout(timeout);
          }
        };

        // Check after a brief delay
        setTimeout(checkStylesheets, 2000);
      }

      // Clean up timeout on unmount
      return () => clearTimeout(timeout);
    };

    // Start font loading check after component mounts
    const timer = setTimeout(handleFontLoading, 100);

    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything
  return null;
};

export default ClientFontHandler;
