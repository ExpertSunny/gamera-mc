export default function MinecraftPattern() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="100%" 
      height="100%" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, opacity: 0.05 }}
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ffffff" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
