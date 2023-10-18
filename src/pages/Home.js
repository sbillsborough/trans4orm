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
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Pt's</a>
            </li>
            <li>
              <a href="#">Classes & Timetable</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
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
      <div className="hero"></div>
    </>
  );
}

export default Home;
