import csBuilding from "../../assets/cs.png";
import "./HeroArtwork.css";

function HeroArtwork() {
  return (
    <div className="art-card" aria-hidden="true">
      <img
        src={csBuilding}
        fetchpriority="high"
        loading="eager"
        decoding="async"
        alt="Department of Computer Science and Engineering building"
      />
    </div>
  );
}

export default HeroArtwork;
