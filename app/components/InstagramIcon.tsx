interface InstagramIconProps {
  className?: string;
}

export default function InstagramIcon({ className = "" }: InstagramIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-2.3 0-4.2-1.9-4.2-4.2S5.7 3.8 8 3.8s4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm0-4c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm6-6.5c.7 0 1.3-.5 1.3-1.2V4.8c0-.7-.5-1.2-1.2-1.2H8.7V2.8c0-1-.8-1.8-1.8-1.8H5.2c-1 0-1.8.8-1.8 1.8v1.2H3.5c-.7 0-1.2.5-1.2 1.2v3.2c0 .7.5 1.2 1.2 1.2h2.2v2.7zM14.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor"/>
    </svg>
  );
}