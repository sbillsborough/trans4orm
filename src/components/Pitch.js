import sparkles from "../resources/img/sparkles.png";

function Pitch() {
  return (
    <div className="pitch-container">
      <h3>What sets us apart from the rest?</h3>
      <div className="pitch-cards-container">
        <div className="pitch-card">
          <img src={sparkles} className="sparkles" alt="Sparkle icon" />
          <h4>We’re Experienced</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do enum
            vulpur.
          </p>
        </div>
        <div className="pitch-card">
          <img src={sparkles} className="sparkles" alt="Sparkle icon" />
          <h4>We’re Responsive</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do enum
            vulpur.
          </p>
        </div>
        <div className="pitch-card">
          <img src={sparkles} className="sparkles" alt="Sparkle icon" />
          <h4>We’re Consistent</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do enum
            vulpur.
          </p>
        </div>
        <div className="pitch-card">
          <img src={sparkles} className="sparkles" alt="Sparkle icon" />
          <h4>We’re Quantifiable</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do enum
            vulpur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pitch;
