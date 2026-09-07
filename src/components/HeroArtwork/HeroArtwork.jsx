import "./HeroArtwork.css";

function HeroArtwork() {
  return (
    <div className="art-card" aria-hidden="true">
      <div className="dept-photo-frame">
        <img
          src="/cs.png"
          fetchpriority="high"
          loading="eager"
          decoding="async"
          alt="Department of Computer Science and Engineering"
          className="dept-photo"
        />
        <div className="dept-photo-overlay" />
      </div>
    </div>
  );
}

export default HeroArtwork;
