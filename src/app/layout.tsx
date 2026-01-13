import React from "react";
// Using BlinkMacSystemFont - no Google Font import needed
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import { LoadingProvider } from "./context/LoadingContext";
import PreLoader from "@/components/Common/PreLoader";
import ErrorBoundary from "@/components/Common/ErrorBoundary";
import ClientProviders from "@/components/Common/ClientProviders";

// BlinkMacSystemFont configuration - handled via CSS

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts - Figtree and Quicksand */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Quicksand:wght@300..700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
          />
        </noscript>
        {/* Global chunk error handler */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Global chunk loading error handler
              window.addEventListener('error', function(e) {
                const isChunkError = e.message && (
                  e.message.includes('Loading chunk') ||
                  e.message.includes('ChunkLoadError') ||
                  e.message.includes('Loading CSS chunk')
                );

                if (isChunkError) {
                  console.warn('Chunk loading error detected, reloading page...');
                  setTimeout(function() {
                    window.location.reload();
                  }, 1000);
                }
              });

              // Handle unhandled promise rejections for chunks
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && e.reason.name === 'ChunkLoadError') {
                  console.warn('Chunk promise rejection detected, reloading page...');
                  e.preventDefault();
                  setTimeout(function() {
                    window.location.reload();
                  }, 1000);
                }
              });
            `,
          }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <ErrorBoundary>
          <ClientProviders>
            <LoadingProvider>
              <PreLoader />
              <NextTopLoader />
              <AuthDialogProvider>
                <SessionProviderComp>
                  <ThemeProvider
                    attribute="class"
                    enableSystem={true}
                    defaultTheme="light"
                  >
                    <Aoscompo>
                      <Header />
                      {children}
                      <Footer />
                    </Aoscompo>
                    <ScrollToTop />
                  </ThemeProvider>
                </SessionProviderComp>
              </AuthDialogProvider>
            </LoadingProvider>
          </ClientProviders>
        </ErrorBoundary>
      </body>
    </html>
  );
}
