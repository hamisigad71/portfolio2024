import React, { FC } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  links: { href: string; text: string }[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  const lastIndex = links.length - 1;
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap justify-center gap-1.5 my-3 text-sm font-medium">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {index !== lastIndex ? (
            <>
              <Link
                href={link.href}
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                {link.text}
              </Link>
              <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-600 shrink-0" />
            </>
          ) : (
            <span className="text-slate-900 dark:text-white font-semibold">
              {link.text}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
