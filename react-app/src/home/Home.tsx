import React from "react";

import havana from "../img/havana.png";
import shape from "../img/shape.png";
import attention from "../img/attention.png";
import artist1 from "../img/shawn-mendes.jpg";
import artist2 from "../img/charlie-puth.png";
import artist3 from "../img/drake.jpg";

const Home = () => {
  return (
    <main className="home-page py-2">
      <section className="section landing-section">
        <div className="albums-contain">
          <div className="album-card">
            <img src={havana} alt="album img" className="album-img" />
          </div>
          <div></div>
          <div></div>
          <div className="album-card">
            <img src={shape} alt="album img" className="album-img" />
          </div>
        </div>
        <div className="typo-contain">
          <h1 className="head-1 typo pb-1">Listening is everything</h1>
          <p className="lead-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ut
            odio optio.
          </p>
          <a href="#" className="btn btn-purple">
            <i className="material-icons pr-0">play_circle_filled</i>
            Explore
          </a>
        </div>
      </section>
      <section className="section top-ten-section py-1">
        <div className="section-header mb-2">
          <h4 className="head-4 med sub-head">Week's Top 10</h4>
          <h2>Top 10 songs being discovered this week</h2>
        </div>
        <div className="top-ten-songs songs-contain">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <div key={num} className="song-card">
              <img src={attention} alt="song-img" className="song-img" />
              <div className="song-content">
                <div className="top-content">
                  <h3 className="semi-med">Attention</h3>
                  <p className="lead-3 med">Charlie Puth</p>
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
          ))}
        </div>
      </section>
      <section className="section trending-section py-1 mb-3">
        <div className="section-header mb-2">
          <h4 className="head-4 med sub-head">Trending Today</h4>
          <h2>Trending song of the day</h2>
        </div>
        <div className="trending-contain">
          <div className="trending-song songs-contain">
            <img src={shape} alt="trending img" className="trending-song-img" />
            <div className="right-content">
              <div className="trending-content">
                <div className="trending-title">
                  <i className="material-icons pr-0">play_circle_filled</i>
                  <div className="title-header">
                    <h2 className="head-2">Shape of you</h2>
                    <p className="lead-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maiores, ipsa.
                    </p>
                    <div className="trending-stats">
                      <div className="favorites song-stat">
                        <i className="material-icons purple stat-icon">
                          favorite
                        </i>
                        <span className="semi-med count">1.2k</span>
                      </div>
                      <div className="favorites song-stat">
                        <i className="material-icons purple stat-icon">
                          trending_up
                        </i>
                        <span className="semi-med count">1.2k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section artist-section py-1">
        <div className="section-header mb-2">
          <h4 className="head-4 med sub-head">Top Artists</h4>
          <h2>Songs by top artists</h2>
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
    </main>
  );
};

export default Home;
