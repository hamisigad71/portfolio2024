"use client";

import React from "react";
import { usePageLoader } from "@/hooks/usePageLoader";
import LoadingTrigger, {
  LoadingButton,
  LoadingLink,
} from "@/components/Common/LoadingTrigger";

const LoadingDemo = () => {
  const {
    navigateWithLoader,
    withLoader,
    showLoaderFor,
    startLoading,
    stopLoading,
  } = usePageLoader();

  // Simulate async operation
  const simulateAsyncOperation = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Async operation completed!");
  };

  // Simulate API call
  const simulateApiCall = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    alert("API call completed!");
  };

  return (
    <section className="bg-white dark:bg-darkmode py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Glass Loader Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Test the beautiful glass loader functionality across different
            scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Navigation Testing */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Navigation Loading
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Test page navigation with glass loader
            </p>
            <div className="space-y-3">
              <LoadingLink
                href="/"
                className="block w-full bg-primary text-white text-center py-2 px-4 rounded-lg hover:bg-darkprimary transition-colors"
              >
                Go to Home
              </LoadingLink>
              <LoadingLink
                href="/about"
                className="block w-full bg-secondary text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Go to About
              </LoadingLink>
            </div>
          </div>

          {/* Manual Triggers */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Manual Triggers
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Manually control the loader
            </p>
            <div className="space-y-3">
              <LoadingTrigger
                duration={2000}
                className="w-full"
                onLoadingStart={() => console.log("Loading started")}
                onLoadingEnd={() => console.log("Loading ended")}
              >
                Show for 2 seconds
              </LoadingTrigger>
              <button
                onClick={() => showLoaderFor(3000)}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Show for 3 seconds
              </button>
            </div>
          </div>

          {/* Async Operations */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Async Operations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Test with real async functions
            </p>
            <div className="space-y-3">
              <LoadingButton
                onClick={simulateAsyncOperation}
                className="w-full"
              >
                Async Operation (2s)
              </LoadingButton>
              <LoadingButton
                onClick={simulateApiCall}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                API Call (3s)
              </LoadingButton>
            </div>
          </div>

          {/* Custom Controls */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Custom Controls
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Manual start/stop controls
            </p>
            <div className="space-y-3">
              <button
                onClick={startLoading}
                className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Start Loading
              </button>
              <button
                onClick={stopLoading}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Stop Loading
              </button>
            </div>
          </div>

          {/* Navigation with withLoader */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Smart Navigation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Navigation with async operations
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  withLoader(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    navigateWithLoader("/");
                  });
                }}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Prepare & Navigate
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-linear-to-br from-primary to-blue-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <ul className="text-sm space-y-2">
              <li>• Glass loader shows on all page changes</li>
              <li>• Use navigation buttons to see it in action</li>
              <li>• Manual triggers for custom scenarios</li>
              <li>• Async operations automatically show loader</li>
              <li>• Works across the entire project</li>
            </ul>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-12 bg-gray-900 text-gray-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Usage Examples</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="text-green-400 font-medium mb-2">
                Navigate with loader:
              </h4>
              <code className="block bg-gray-800 p-2 rounded">
                const {`{ navigateWithLoader }`} = usePageLoader();
                <br />
                navigateWithLoader('/about');
              </code>
            </div>
            <div>
              <h4 className="text-blue-400 font-medium mb-2">
                Async operations:
              </h4>
              <code className="block bg-gray-800 p-2 rounded">
                const {`{ withLoader }`} = usePageLoader();
                <br />
                await withLoader(async () =&gt; {`{`}
                <br />
                &nbsp;&nbsp;// Your async code here
                <br />
                {`}`});
              </code>
            </div>
            <div>
              <h4 className="text-purple-400 font-medium mb-2">
                Manual control:
              </h4>
              <code className="block bg-gray-800 p-2 rounded">
                const {`{ startLoading, stopLoading }`} = usePageLoader();
                <br />
                startLoading(); // Show loader
                <br />
                stopLoading(); // Hide loader
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingDemo;
