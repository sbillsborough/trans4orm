import logo from "../resources/img/logo.png";

function NavBar() {
  return (
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
  );
}

export default NavBar;
