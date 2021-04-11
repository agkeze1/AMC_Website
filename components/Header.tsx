export const Header = () => {
  return (
    <>
      <div id="Overlay">
        <nav id="overlay-menu" className="menu-main-menu-container">
          <ul id="menu-main-menu" className="overlay-menu">
            <li className="current_page_item">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/project">Projects</a>
            </li>
            <li>
              <a href="/the-team">The Team</a>
            </li>
            <li>
              <a href="/own-a-property">Own a Property</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="content/builder/offer.html">Site Update</a>
            </li>
            <li>
              <a href="content/builder/offer.html">Gallery</a>
            </li>
            <li>
              <a href="content/builder/contact-us.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <a
        className="overlay-menu-toggle"
        href="#"
        style={{ borderRadius: "20px 0", border: "1px solid #ffba00" }}
      >
        <i className="open icon-menu"></i>
        <i className="close icon-cancel"></i>
      </a>

      {/* Logo */}
      <div
        id="logo-container"
        style={{
          backgroundColor: "transparent",
          width: "50px",
          position: "absolute",
          top: "20px",
          left: "30px",
          zIndex: 1,
        }}
      >
        <a href="/" title="BeBuilder - BeTheme">
          <img src="images/logo.png" style={{ width: "100%" }} />
        </a>
      </div>
    </>
  );
};
