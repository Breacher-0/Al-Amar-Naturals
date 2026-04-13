const LeafSVG = ({ className }) => (
  <svg viewBox="0 0 54 84" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 0C27 0 0 25 0 54C0 70 12 84 27 84C42 84 54 70 54 54C54 25 27 0 27 0Z" />
  </svg>
);

export default function FloatingLeaves() {
  return (
    <div className="visual-layer">
      <LeafSVG className="leaf-1" />
      <LeafSVG className="leaf-2" />
      <LeafSVG className="leaf-3" />
      <LeafSVG className="leaf-4" />
    </div>
  );
}
