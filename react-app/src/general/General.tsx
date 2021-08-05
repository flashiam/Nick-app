import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

import Card from "../layouts/Card";
import albumArt from "../img/recom_song_1.jpg";
import artistImg from "../img/charlie-puth.png";

import Auth from "../Auth";
import { integrateAccount } from "../actions/authActions";

type Props = {
  integrateAccount?: Function;
  auth: {
    linkedAccounts: any;
    spotify: string;
  };
};

const Influencer = ({
  auth: { linkedAccounts, spotify },
  integrateAccount,
}: Props) => {
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

  const auth = Auth();

  // Function to connect spotify
  const connectSpotify = () => {
    var popupWinWidth = window.screen.width / 4;
    var popupWinHeight = window.screen.height / 2;
    var left = (window.screen.width - popupWinWidth) / 2;
    var top = (window.screen.height - popupWinHeight) / 2;

    window.open(
      auth,
      "newwindow",
      `width=` +
        popupWinWidth +
        `, height=` +
        popupWinHeight +
        `,top=` +
        top +
        `,left=` +
        left
    );

    window.addEventListener("message", e => {
      if (e.data.eventType === "link-spotify") {
        const spotify = {
          account: e.data.account,
          token: e.data.token,
        };
        integrateAccount && integrateAccount(spotify);
      }
    });
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
          <h2 className="head-2 pb-1">Trending Songs</h2>
        </div>
        <div className="albums-contain">
          {!spotify ? (
            <div className="alt-message-contain">
              <p className="lead-2">
                Looks like you haven't connected your spotify account
              </p>
              <button className="btn btn-secondary" onClick={connectSpotify}>
                Connect to spotify
              </button>
            </div>
          ) : (
            <Carousel responsive={responsive} swipeable draggable>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <div key={num} className="album-item">
                  <div className="item-img">
                    <img src={albumArt} alt="" className="album-img" />
                    <div className="item-stats">
                      <div className="stat-contain">
                        <div className="stat listen-stat">Total listens</div>
                        <div className="stat-count listen-count">1.2k</div>
                      </div>
                      <div className="stat-contain">
                        <div className="stat listen-stat">
                          Total listen time
                        </div>
                        <div className="stat-count listen-count">23:05:34</div>
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
          )}
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

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { integrateAccount })(Influencer);
