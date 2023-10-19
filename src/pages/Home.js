import logo from "../resources/img/logo.png";

function Home() {
  return (
    <>
      <header>
        <table>
          <tr>
            <th>Opening hours: Mon - Fri:</th>
            <td>05:00- 22:00</td>
            <th>Sat-Sun:</th>
            <td>08:00- 18:00</td>
          </tr>
          <tr>
            <th>Call us today:</th>
            <td>01942 597961</td>
          </tr>
        </table>
      </header>
      <div className="nav-container">
        <nav>
          <img src={logo} className="logo" alt="T4 Logo" />
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="ourpt">Our Pt's</a>
            </li>
            <li>
              <a href="classes">Classes & Timetable</a>
            </li>
            <li>
              <a href="blogs">Blogs</a>
            </li>
            <li>
              <a href="contact">Contact Us</a>
            </li>
          </ul>
          <table>
            <tr>
              <th>Contact us today</th>
              <td>
                <button>Sign up today</button>
              </td>
            </tr>
          </table>
        </nav>
      </div>
      <div className="hero">
        <div className="image-text">
          <p>Achieve Your Fitness Goal.</p>
          <p>TRAIN IN YOUR OWN TIME, IN WIGAN !</p>
          <p>
            We all have our own reasons for going to the gym, however we all
            have one thing is common, we want to improve and be the best version
            of ourselves. TRANS4ORM's main purpose is to help people transform
            physically and mentally in a professional, friendly, and safe
            environment.
          </p>
          <button>Sign up today</button>
        </div>
      </div>

      <section className="intro">
        <h5>Achieve Your Fitness Goal.</h5>
        <p>Fitness Should be accessible to everyone.</p>
        <p>We are dedicated to helping you achieve your fitness goals.</p>
        <p>
          We all have our own reasons for going to the gym, however we all have
          one thing is common, we want to improve and be the best version of
          ourselves.
        </p>
        <button>Sign up today</button>
      </section>
    </>
  );
}

export default Home;
