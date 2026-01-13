"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import SimpleFallback from "./SimpleFallback";

// Dynamic imports with ssr: false (only works in client components)
const NetworkErrorProvider = dynamic(
  () => import("@/components/Common/NetworkErrorProvider"),
  { ssr: false }
);

const FontErrorRecovery = dynamic(
  () => import("@/components/Common/FontErrorRecovery"),
  { ssr: false }
);

const ClientFontHandler = dynamic(
  () => import("@/components/Common/ClientFontHandler"),
  { ssr: false }
);

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return (
    <Suspense fallback={<SimpleFallback />}>
      <NetworkErrorProvider>
        <ClientFontHandler />
        <FontErrorRecovery />
        {children}
      </NetworkErrorProvider>
    </Suspense>
  );
};

export default ClientProviders;
