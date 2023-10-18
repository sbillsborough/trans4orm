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
      <h1>Hello World!</h1>;
    </>
  );
}

export default Home;
