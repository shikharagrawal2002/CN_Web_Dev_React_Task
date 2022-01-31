const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="content">
        <div className="image">
          <img
            src="https://www.marsmedia.nl/wp-content/uploads/2020/10/undraw_quite_town_mg2q-1.svg"
            alt="No"
            className="responsiveImage"
          />
        </div>
        <div className="text">
          <h1>Welcome To</h1>
          <h3>SRM HUB</h3>
          <p>
            Find the best notes and restaurant <br></br>reviews
          </p>
          <div className="buttons-container">
            <a href="/notes" className="button-notes">
              Notes
            </a>
            <a href="restaurant" className="button-restaurant">
              Restaurant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
