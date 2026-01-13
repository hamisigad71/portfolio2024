"use client";

import React from "react";
import { usePageLoader } from "../../hooks/usePageLoader";

interface LoadingTriggerProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  onLoadingStart?: () => void;
  onLoadingEnd?: () => void;
}

const LoadingTrigger: React.FC<LoadingTriggerProps> = ({
  children,
  className = "",
  duration = 1000,
  onLoadingStart,
  onLoadingEnd,
}) => {
  const { showLoaderFor, startLoading, stopLoading } = usePageLoader();

  const handleClick = () => {
    onLoadingStart?.();
    startLoading();

    setTimeout(() => {
      stopLoading();
      onLoadingEnd?.();
    }, duration);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-primary text-white rounded-lg hover:bg-darkprimary transition-colors duration-200 ${className}`}
    >
      {children || "Trigger Loading"}
    </button>
  );
};

// Export additional utility components
export const LoadingButton: React.FC<{
  onClick?: () => Promise<void> | void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}> = ({ onClick, children, className = "", disabled = false }) => {
  const { withLoader, isLoading } = usePageLoader();

  const handleClick = async () => {
    if (onClick) {
      if (onClick.constructor.name === "AsyncFunction") {
        await withLoader(onClick as () => Promise<void>);
      } else {
        (onClick as () => void)();
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`px-4 py-2 bg-primary text-white rounded-lg hover:bg-darkprimary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${className}`}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

// Export navigation utilities
export const LoadingLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  replace?: boolean;
}> = ({ href, children, className = "", replace = false }) => {
  const { navigateWithLoader } = usePageLoader();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithLoader(href, { replace });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};

export default LoadingTrigger;
