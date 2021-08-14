import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

import Card from "../layouts/Card";
import BackBtn from "../layouts/BackBtn";
import albumArt from "../img/recom_song_1.jpg";
import artistImg from "../img/charlie-puth.png";

import responsive from "../carouselConfig";
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
            <BackBtn />
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
            <Carousel
              responsive={responsive}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              swipeable
              draggable
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <Card
                  key={num}
                  songImg={albumArt}
                  songName="Xscape"
                  releaseDate="11/07/21"
                  totalListens={200}
                  totalFollowers={100}
                  listenLimit={20}
                  points={150}
                  user="general"
                />
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
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable
            draggable
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <Card
                key={num}
                songImg={artistImg}
                songName="Charlie Puth"
                releaseDate="11/07/21"
                totalListens={200}
                totalFollowers={100}
                listenLimit={20}
                points={150}
                user="general"
              />
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
