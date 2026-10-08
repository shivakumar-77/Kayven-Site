interface LinkedInIconProps {
  className?: string;
}

export default function LinkedInIcon({ className = "" }: LinkedInIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2 4h2v12H2V4zm8 0h2v7h1c0-1.2-.7-2.1-1.5-2.8C10.1 5.6 9.3 5 8 5c-2.8 0-5 2.2-5 6v3H2V4h2v12h2V7.5h1.8c0-1.4.7-2.3 1.8-2.3 1.3 0 1.8.6 1.8 2v3.2h2V4z" fill="currentColor"/>
    </svg>
  );
}