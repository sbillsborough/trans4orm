import tick from "../resources/img/tickicon.png";

function OffersCards() {
  return (
    <>
      <div className="offers-cards-container">
        <div className="offers-cards-40">
          <div className="monthly-offer-heading-container">
            <h4>MONTHLY PACKAGE</h4>
            <button className="popular">Popular</button>
          </div>
          <div className="price-container">
            <h4>£29.00</h4>
            <span>Per Month</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do enum
            vulpur.
          </p>
          <h5>What you get!</h5>
          <div className="access-container">
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
            </div>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
            </div>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
            </div>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
            </div>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
            </div>
          </div>
        </div>
        <div className="offers-cards-38"></div>
        <div className="offers-cards-39"></div>
      </div>
      <div className="vector-img-group10"></div>
    </>
  );
}

export default OffersCards;
