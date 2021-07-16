import React from "react";
import attention from "../img/attention.png";

const Influencer = () => {
  const history = window.history;
  return (
    <main className="influencer-page">
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
          <h4 className="head-4 med sub-head">Hits By Album</h4>
          <h2>Your super hit albums</h2>
        </div>
        <div className="top-ten-songs songs-contain">
          {[1, 2, 3, 4].map(num => (
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
      <section className="section current-stats">
        <div className="section-header mb-2">
          <h4 className="head-4 med sub-head">Current Stats</h4>
          <h2>Your activity track</h2>
        </div>
        <div className="stat-contain">
          <div className="stat">
            <i className="material-icons">music_note</i>
            <div className="stat-desc">
              <h4 className="semi-med stat-head">Total Songs</h4>
              <h3 className="stat-num">900</h3>
            </div>
          </div>
          <div className="stat">
            <i className="material-icons">album</i>
            <div className="stat-desc">
              <h4 className="semi-med stat-head">Total Albums</h4>
              <h3 className="stat-num">560</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Influencer;
