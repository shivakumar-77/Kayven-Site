import { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel: string;
  targetBlank?: boolean;
}

export default function IconLink({ href, children, ariaLabel, targetBlank = false }: IconLinkProps) {
  return (
    <a
      href={href}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      title={ariaLabel}
      className="flex h-11 w-11 items-center justify-center border border-black text-black transition-all duration-100 hover:bg-black hover:text-white"
    >
      {children}
    </a>
  );
}