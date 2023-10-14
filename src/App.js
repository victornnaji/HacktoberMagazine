function App() {
  return (
    <body>
      <div className="">
        <div className="announcement">
          <div className="annoucement-icon">
            <svg className="icon icon-notification">
              <use xlinkHref="img/sprite.svg#icon-notification"></use>
            </svg>
          </div>
          <h2 className="announcement__text">
            Remember to
            <a href="https://hacktoberfest.digitalocean.com/profile">
              Register
            </a>
            to be eligible for the tee!
          </h2>
          <div className="github-logo">
            <svg className="icon icon-github">
              <use xlinkHref="img/sprite.svg#icon-github"></use>
            </svg>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="logo-holder">
            <span className="hacktober">Hacktober</span>
            <span className="magazine">Magazine</span>
            <span className="decagon">Developers</span>
          </div>
        </div>
      </div>

      <div id="searchContainer">
        <input
          type="text"
          id="searchInput"
          onkeyup="searchForDevelopers()"
          placeholder="Search.."
        />
      </div>

      <div className="container flex card-container" id="cardContainer"></div>
      <script src="script/index.js"></script>
    </body>
  );
}

export default App;
