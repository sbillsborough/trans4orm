function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <h1 id="logo">T4</h1>
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
  );
}

export default NavBar;
