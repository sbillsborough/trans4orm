import logo from "../resources/img/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="top">
          <img src={logo} className="logo" alt="T4 Logo" />
          <div className="lists">
            <div className="list-flex">
              <h4>Information</h4>
              <ul>
                <li>Privacy</li>
                <li>FAQ</li>
                <li>Partners</li>
                <li>Blog</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div className="list-flex">
              <h4>Menu</h4>
              <ul>
                <li>Our Pt's</li>
                <li>About Trans4orm</li>
                <li>Classes & Timetable</li>
              </ul>
            </div>
            <div className="list-button">
              <button>Sign up today</button>
              <a href="tel:01942597961">01942597961</a>
              <a href="mailto:info@trans4orm.co.uk">info@trans4orm.co.uk</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-text">
            <span>made better.</span>
            <span>made different.</span>
            <span>made for everyone.</span>
          </div>
          <button>Sign up today</button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
