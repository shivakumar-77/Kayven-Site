interface EmailIconProps {
  className?: string;
}

export default function EmailIcon({ className = "" }: EmailIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2 4l8 5 8-5v10l-8 5-8-5V4zm8 3.5L5 9 2 11.5V4l3 2 3-2v7.5z" fill="currentColor"/>
    </svg>
  );
}