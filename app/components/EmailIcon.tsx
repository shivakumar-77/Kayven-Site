interface EmailIconProps {
  className?: string;
}

export default function EmailIcon({ className = "" }: EmailIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}