import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          className="profile-img"
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="My photo"
        />
        <h1 className="name">Kulmakhanbet Nurbakyt</h1>
        <p className="tagline">Backend developer in progress 🚀</p>
      </div>
    </header>
  );
}

export default Header;
