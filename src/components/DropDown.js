function DropDown() {
  return (
    <div className="drop-down-container">
      <div className="drop-down-box-active">
        <div className="q-button">
          <span class="active-span">
            Q: Lorem ipsum dolor sit amet consectetur.
          </span>
          <span class="up-arrow-icon"></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sem arcu molestie nisi urna.
          Scelerisque consectetur dolor tellus vitae. Dui at elementum posuere
          volutpat aenean leo porttitor. Lorem ipsum dolor sit amet consectetur.
          Sem arcu molestie nisi urna. Scelerisque consectetur dolor tellus
          vitae. Dui at elementum posuere volutpat aenean leo porttitor.
        </p>
      </div>
      <div className="drop-down-box">
        <div className="q-button">
          <span>Q: Lorem ipsum dolor sit amet consectetur.</span>
          <span class="down-arrow-icon"></span>
        </div>
      </div>
      <div className="drop-down-box">
        <div className="q-button">
          <span>Q: Lorem ipsum dolor sit amet consectetur.</span>
          <span class="down-arrow-icon"></span>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
