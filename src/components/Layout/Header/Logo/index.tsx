"use client";
import Link from "next/link";
import { usePageLoader } from "@/hooks/usePageLoader";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

const Logo: React.FC = () => {
  const { navigateWithLoader } = usePageLoader();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname !== "/") {
      e.preventDefault();
      navigateWithLoader("/");
    }
  };

  return (
    <Link href="/" className="inline-block" onClick={handleClick}>
      <div className="flex items-center gap-2 group">
        {/* Logo Icon with gradient background */}
        <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
          <Icon 
            icon="ph:code-bold" 
            className="w-6 h-6 text-white"
          />
          {/* Accent dot */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
        </div>
        
        {/* Logo Text */}
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold font-quicksand bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-800 dark:group-hover:from-blue-300 dark:group-hover:to-blue-400 transition-all duration-300">
            Daysman
          </span>
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Dev
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
