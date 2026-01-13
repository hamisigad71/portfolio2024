"use client";

import { useLoading } from "@/app/context/LoadingContext";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const usePageLoader = () => {
  const { isLoading, startLoading, stopLoading, setIsLoading } = useLoading();
  const router = useRouter();

  // Navigate to a new page with loading
  const navigateWithLoader = useCallback(
    (path: string, options?: { replace?: boolean }) => {
      startLoading();
      if (options?.replace) {
        router.replace(path);
      } else {
        router.push(path);
      }
    },
    [router, startLoading]
  );

  // Show loader for async operations
  const withLoader = useCallback(
    async <T>(asyncFunction: () => Promise<T>): Promise<T> => {
      startLoading();
      try {
        const result = await asyncFunction();
        return result;
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  // Show loader for a specific duration
  const showLoaderFor = useCallback(
    (duration: number) => {
      startLoading();
      setTimeout(stopLoading, duration);
    },
    [startLoading, stopLoading]
  );

  return {
    isLoading,
    startLoading,
    stopLoading,
    setIsLoading,
    navigateWithLoader,
    withLoader,
    showLoaderFor,
  };
};

export default usePageLoader;
