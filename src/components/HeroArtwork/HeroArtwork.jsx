import csBuilding from "../../assets/cs.png";
import "./HeroArtwork.css";

function HeroArtwork() {
  return (
    <div className="art-card" aria-hidden="true">
      <div className="art-card-inner">
        <img
          src={csBuilding}
          fetchpriority="high"
          loading="eager"
          decoding="async"
          alt="Department of Computer Science and Engineering building"
        />
        <div className="art-card-gradient" />
      </div>
    </div>
  );
}

export default HeroArtwork;
