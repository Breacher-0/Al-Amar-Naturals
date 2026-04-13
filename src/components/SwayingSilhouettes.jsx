const MonsteraSVG = ({ className }) => (
  // Highly abstracted elegant monstera/palm leaf shape
  <svg className={className} viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,180 Q100,200 180,180 Q160,100 180,20 Q100,0 20,20 Q40,100 20,180 Z" />
  </svg>
);

export default function SwayingSilhouettes() {
  return (
    <div className="visual-layer">
      <MonsteraSVG className="silhouette-top" />
      <MonsteraSVG className="silhouette-bottom" />
    </div>
  );
}
