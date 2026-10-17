interface LinkedInIconProps {
  className?: string;
}

export default function LinkedInIcon({ className = "" }: LinkedInIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <rect x="2" y="9" width="4" height="12" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="4" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}