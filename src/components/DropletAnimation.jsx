export default function DropletAnimation() {
  return (
    <div className="droplet-wrapper">
      <div className="droplet-container">
        {/* Falling Droplet in Slow-Mo */}
        <svg className="droplet-svg" viewBox="0 0 24 36" fill="currentColor">
          <path d="M12 0C12 0 0 16 0 24C0 30.6274 5.37258 36 12 36C18.6274 36 24 30.6274 24 24C24 16 12 0 12 0Z"/>
        </svg>
        
        {/* Slow-expanding Liquid Ripple */}
        <div className="droplet-ripple animate-cinematic-ripple-1" />
        
        {/* Secondary Echo Ripple */}
        <div className="droplet-ripple animate-cinematic-ripple-2" />
      </div>
    </div>
  );
}
