import logo from "../resources/img/logo.png";
import hero from "../resources/img/Rectangle2.png";

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
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Pt's</a>
          <a href="#">Classes & Timetable</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
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
      <div className="hero"></div>
    </>
  );
}

export default Home;
