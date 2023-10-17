function NavBar() {
  return (
    <div className="nav-container">
      <h1 id="logo">T4</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Pt's</a>
        <a href="#">Classes & Timetable</a>
        <a href="#">Blogs</a>
        <a href="#">Contact Us</a>
      </nav>
      <table>
        <tr>
          <th>Contact us today</th>
          <td>
            <button>Sign up today</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default NavBar;
