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
    </NetworkErrorContext.Provider>
  );
};

export default NetworkErrorProvider;
