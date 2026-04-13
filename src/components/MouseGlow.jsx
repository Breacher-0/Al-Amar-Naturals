import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for incredibly smooth 60fps tracking
      if (glowRef.current) {
        animationFrameId = requestAnimationFrame(() => {
          glowRef.current.style.transform = `translate3d(${e.clientX - 500}px, ${e.clientY - 500}px, 0)`;
          glowRef.current.style.opacity = '1';
        });
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={glowRef}
      className="mouse-glow-overlay"
      style={{
        width: '1000px',
        height: '1000px',
        opacity: 0,
        background: 'radial-gradient(circle 500px at 50% 50%, rgba(194,155,78,0.1), transparent 60%)'
      }}
    />
  );
}
