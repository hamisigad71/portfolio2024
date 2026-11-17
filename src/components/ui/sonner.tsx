"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white/95 dark:group-[.toaster]:bg-slate-900/95 group-[.toaster]:text-slate-900 dark:group-[.toaster]:text-slate-100 group-[.toaster]:border-slate-200 dark:group-[.toaster]:border-slate-800 group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur-xl group-[.toaster]:rounded-xl font-sans",
          description: "group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400",
          actionButton:
            "group-[.toast]:bg-blue-600 group-[.toast]:text-white group-[.toast]:font-medium",
          cancelButton:
            "group-[.toast]:bg-slate-100 dark:group-[.toast]:bg-slate-800 group-[.toast]:text-slate-600 dark:group-[.toast]:text-slate-300",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
