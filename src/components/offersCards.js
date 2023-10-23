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

          <div className="access-container">
            <div className="price-container">
              <h4>£29.00</h4>
              <span>Per Month</span>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              enum vulpur.
            </span>
            <h5>What you get!</h5>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
              <span>Access To 2 classes a month</span>
            </div>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
              <span>Access To 2 classes a month</span>
            </div>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
              <span>Access To 2 classes a month</span>
            </div>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
              <span>Access To 2 classes a month</span>
            </div>
            <div className="tick-container">
              <img src={tick} className="tick" alt="Tick Icon" />
              <span>Access To 2 classes a month</span>
            </div>
          </div>
          <div className="button-container">
            <button>View more on price</button>
            <a href="view">Compare Package</a>
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
