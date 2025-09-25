export default function MeteorShower() {
  return (
    <div className="meteor-shower">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="meteor" />
      ))}
    </div>
  );
}
