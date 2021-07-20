import { Link } from "react-router-dom";
import albumArt from "../img/recom_song_1.jpg";
import spotifyIcon from "../img/Spotify_Icon_Green.png";
import artistImg from "../img/charlie-puth.png";

import Carousel from "react-multi-carousel";

const Influencer = () => {
  const history = window.history;

  // Carousel responsiveness
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      partialVisibilityGutter: 15,
    },
  };

  return (
    <main className="general-page">
      <div className="top-header">
        <div className="landing-section">
          <div className="container">
            <div className="back-btn semi-med">
              <a href="#!" className="back-btn" onClick={() => history.go(-1)}>
                <i className="material-icons semi-med">chevron_left</i>
              </a>
              Back
            </div>
            <div className="typo-contain">
              <h1 className="head-1 typo pb-1">
                Hey John , dive into the world of{" "}
                <span className="secondary">Musix</span>
              </h1>
              <a
                href="#trending-section"
                className="btn btn-secondary promote-btn"
              >
                <p className="lead-2">Explore</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trending albums */}
      <section
        id="trending-section"
        className="trending-album-contain mb-6 container"
      >
        <div className="trending-header">
          <h2 className="head-2 pb-1">Trending Albums</h2>
        </div>
        <div className="albums-contain">
          <Carousel responsive={responsive}>
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="album-item mt-1">
                <div className="item-img">
                  <img src={albumArt} alt="" className="album-img" />
                  <div className="item-stats">
                    <div className="stat-contain">
                      <div className="stat listen-stat">Total listens</div>
                      <div className="stat-count listen-count">1.2k</div>
                    </div>
                    <div className="stat-contain">
                      <div className="stat listen-stat">Total listen time</div>
                      <div className="stat-count listen-count">23:05:34</div>
                    </div>
                    <div className="listen-contain">
                      <p className="lead-2">Listen on</p>
                      <div className="listen-option">
                        <a href="#" className="option">
                          <img
                            src={spotifyIcon}
                            alt=""
                            className="listen-img"
                          />
                        </a>
                        <a href="#" className="option">
                          <img
                            src={spotifyIcon}
                            alt=""
                            className="listen-img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-desc">
                  <div className="song-desc">
                    <h4 className="head-4 song-name">Xscape</h4>
                    <p className="lead-2 med singer-name">Brad Traversy</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Artists section */}
      <section className="artists-section container mb-5">
        <div className="artists-header">
          <h2 className="head-2 pb-1">Popular Artists</h2>
          <Link to="/general/artists" className="more-btn secondary">
            More
          </Link>
        </div>
        <div className="songs-contain">
          <Carousel responsive={responsive} swipeable draggable>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <div key={num} className="album-item mt-1">
                <div className="item-img">
                  <img src={artistImg} alt="" className="album-img" />
                  <div className="item-stats">
                    <div className="stat-contain">
                      <div className="stat listen-stat">Total listens</div>
                      <div className="stat-count listen-count">1.2k</div>
                    </div>
                    <div className="stat-contain">
                      <div className="stat listen-stat">Total Followers</div>
                      <div className="stat-count listen-count">15.5M</div>
                    </div>
                  </div>
                </div>
                <div className="item-desc">
                  <h4 className="head-4 song-name">Pain</h4>
                  <p className="lead-2 med promoted-on">11th July 2021</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default Influencer;
