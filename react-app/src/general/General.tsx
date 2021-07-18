import Carousel from "react-multi-carousel";

import attention from "../img/attention.png";
import artist1 from "../img/shawn-mendes.jpg";
import artist2 from "../img/charlie-puth.png";
import artist3 from "../img/drake.jpg";
import generalLanding from "../img/general_landing.jpg";
import recomSong1 from "../img/recom_song_1.jpg";
import recomSong2 from "../img/recom_song_2.jpg";

const General = () => {
  const history = window.history;

  // const responsive = {

  // }

  return (
    <main className="general-page">
      <section className="general-landing mb-7">
        <div className="top-header container">
          <div className="back-btn semi-med">
            <a
              href="#!"
              className="btn btn-transparent back-btn"
              onClick={() => history.go(-1)}
            >
              <i className="material-icons semi-med">chevron_left</i>
            </a>
            Back
          </div>
          <div className="landing-section-content">
            <div className="typo-contain">
              <h1 className="head-1 typo pb-1">
                Hey John , see all your recent activities on{" "}
                <span className="purple">Musix</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="section recommended-songs mb-10">
          <div className="section-header mb-2">
            <h4 className="head-4 med sub-head">Recommended Songs</h4>
            <h2>Handpicked songs for you</h2>
          </div>
          <div className="songs-contain">
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="song-card">
                <div className="img-contain">
                  <img src={recomSong1} alt="" className="recom-img" />
                </div>
                <div className="song-content">
                  <h4 className="head-4">Xscape</h4>
                  <p className="lead-2 med">Xscape</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section artist-section py-1">
          <div className="section-header mb-2">
            <h4 className="head-4 med sub-head">Recommended Artists</h4>
            <h2>Listen to the artists you may like</h2>
          </div>
          <div className="top-ten-songs songs-contain">
            <div className="song-card">
              <img src={artist1} alt="song-img" className="song-img" />
              <div className="song-content">
                <div className="top-content">
                  <h3 className="semi-med">Shawn Mendes</h3>
                </div>
              </div>
              <div className="stat-contain">
                <div className="favorites song-stat">
                  <i className="material-icons purple stat-icon">favorite</i>
                  <span className="semi-med count">1.2k</span>
                </div>
                <div className="trending song-stat">
                  <i className="material-icons purple stat-icon">trending_up</i>
                  <span className="semi-med count">980</span>
                </div>
              </div>
            </div>
            <div className="song-card">
              <img src={artist2} alt="song-img" className="song-img" />
              <div className="song-content">
                <div className="top-content">
                  <h3 className="semi-med">Charlie Puth</h3>
                </div>
              </div>
              <div className="stat-contain">
                <div className="favorites song-stat">
                  <i className="material-icons purple stat-icon">favorite</i>
                  <span className="semi-med count">1.2k</span>
                </div>
                <div className="trending song-stat">
                  <i className="material-icons purple stat-icon">trending_up</i>
                  <span className="semi-med count">980</span>
                </div>
              </div>
            </div>
            <div className="song-card">
              <img src={artist3} alt="song-img" className="song-img" />
              <div className="song-content">
                <div className="top-content">
                  <h3 className="semi-med">Drake</h3>
                </div>
              </div>
              <div className="stat-contain">
                <div className="favorites song-stat">
                  <i className="material-icons purple stat-icon">favorite</i>
                  <span className="semi-med count">1.2k</span>
                </div>
                <div className="trending song-stat">
                  <i className="material-icons purple stat-icon">trending_up</i>
                  <span className="semi-med count">980</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default General;
