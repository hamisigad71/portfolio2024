"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

interface NetworkErrorContextType {
  isOnline: boolean;
  hasNetworkError: boolean;
  retryConnection: () => void;
  markAsOffline: () => void;
}

const NetworkErrorContext = createContext<NetworkErrorContextType | undefined>(undefined);

export const useNetworkError = () => {
  const context = useContext(NetworkErrorContext);
  if (!context) {
    throw new Error("useNetworkError must be used within a NetworkErrorProvider");
  }
  return context;
};

interface NetworkErrorProviderProps {
  children: React.ReactNode;
}

export const NetworkErrorProvider: React.FC<NetworkErrorProviderProps> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);
  const [hasNetworkError, setHasNetworkError] = useState(false);

  useEffect(() => {
    // Initial online status check
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setHasNetworkError(false);
      // Remove offline class from body
      document.body.classList.remove("font-loading-error");
    };

    const handleOffline = () => {
      setIsOnline(false);
      setHasNetworkError(true);
      // Add offline class to body for CSS fallbacks
      document.body.classList.add("font-loading-error");
    };

    // Listen for network status changes
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Test network connectivity with Google Fonts
    const testNetworkConnectivity = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch("https://fonts.googleapis.com/css2?family=Inter", {
          method: "HEAD",
          mode: "no-cors",
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok && response.status !== 0) {
          throw new Error("Network request failed");
        }
      } catch (error) {
        console.warn("Google Fonts connectivity issue detected:", error);
        setHasNetworkError(true);
        document.body.classList.add("font-loading-error");
      }
    };

    // Test connectivity on mount
    testNetworkConnectivity();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const retryConnection = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      await fetch("https://fonts.googleapis.com/css2?family=Inter", {
        method: "HEAD",
        mode: "no-cors",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      setHasNetworkError(false);
      document.body.classList.remove("font-loading-error");
    } catch (error) {
      console.warn("Retry connection failed:", error);
      setHasNetworkError(true);
    }
  };

  const markAsOffline = () => {
    setHasNetworkError(true);
    document.body.classList.add("font-loading-error");
  };

  const contextValue: NetworkErrorContextType = {
    isOnline,
    hasNetworkError,
    retryConnection,
    markAsOffline,
  };

  return (
    <NetworkErrorContext.Provider value={contextValue}>
      {children}
      {hasNetworkError && <NetworkErrorNotification />}
    </NetworkErrorContext.Provider>
  );
};

const NetworkErrorNotification: React.FC = () => {
  const { retryConnection, isOnline } = useNetworkError();
  const [isVisible, setIsVisible] = useState(true);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    await retryConnection();
    setIsRetrying(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[10000] max-w-sm">
      <div className="bg-white dark:bg-gray-800 border-l-4 border-yellow-500 shadow-lg rounded-lg p-4 animate-slide-up">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <span className="text-yellow-500 text-xl">⚠️</span>
          </div>
          <div className="ml-3 flex-1">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              {!isOnline ? "You're offline" : "Network issue detected"}
            </h4>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
              {!isOnline
                ? "Some features may not work properly while offline."
                : "External resources (like fonts) couldn't be loaded. Using fallbacks."
              }
            </p>
            <div className="mt-3 flex items-center space-x-2">
              {isOnline && (
                <button
                  onClick={handleRetry}
                  disabled={isRetrying}
                  className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRetrying ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-yellow-700" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Retrying...
                    </>
                  ) : (
                    "Retry"
                  )}
                </button>
              )}
              <button
                onClick={handleDismiss}
                className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Dismiss
              </button>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={handleDismiss}
              className="inline-flex text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Font Error Recovery Component
export const FontErrorRecovery: React.FC = () => {
  const { hasNetworkError, markAsOffline } = useNetworkError();

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

export default NetworkErrorProvider;
