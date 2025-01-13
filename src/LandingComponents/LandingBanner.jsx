const LandingBanner = ({ page }) => {
  return (
    <section className="bg-dark2">
      <div
        className="hero-wrapper hero-5"
        id="hero"
        style={{ backgroundImage: "url(assets/img/hero/hero_bg_5_1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-style5 text-center">
                {page === "web" ? (
                  <>
                    <h1 className="hero-title text-white">
                      Revolutionizing Your Business with
                      <span className="text-theme2"> Web Development</span>
                    </h1>
                    <p className="hero-text text-white">
                      Transform your online presence with cutting-edge web
                      development solutions. From responsive websites to
                      full-stack web applications, we deliver exceptional user
                      experiences and streamline your business processes to help
                      you stay ahead in the digital world.
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="hero-title text-white">
                      Revolutionizing Your Business with
                      <span className="text-theme2">
                        {" "}
                        Mobile App Development
                      </span>
                    </h1>
                    <p className="hero-text text-white">
                      Empower your business with custom mobile apps that engage
                      users and deliver exceptional performance. Our app
                      development services create seamless experiences across
                      all devices, helping you reach your customers wherever
                      they are and stay connected.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="hero-thumb5-1">
                <img
                  src={
                    page === "web"
                      ? "assets/img/landingpage/web/webbanner.jpg"
                      : "assets/img/landingpage/app/appbanner.jpg"
                  }
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;

{
  /* <img
src={
  page === "web"
    ? "assets/img/landingpage/web/webbanner.jpg"
    : "assets/img/landingpage/app/appbanner.jpg"
}
alt="img"
/> */
}
