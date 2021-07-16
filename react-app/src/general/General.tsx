import React from "react";
import attention from "../img/attention.png";
import artist1 from "../img/shawn-mendes.jpg";
import artist2 from "../img/charlie-puth.png";
import artist3 from "../img/drake.jpg";

const General = () => {
  const history = window.history;
  return (
    <main className="general-page">
      <div className="top-header">
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
      </div>
      <section className="section recommended-songs">
        <div className="section-header mb-2">
          <h4 className="head-4 med sub-head">Recommended Songs</h4>
          <h2>Handpicked songs for you</h2>
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
    </main>
  );
};

export default General;
