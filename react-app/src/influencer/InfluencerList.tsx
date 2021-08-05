import { useState } from "react";
import songImg from "../img/havana.png";
import spotifyIcon from "../img/Spotify_Icon_Green.png";

import Card from "../layouts/Card";

const InfluencerList = () => {
  const history = window.history;
  const [currentLayout, switchLayout] = useState<number>(1);

  return (
    <main className="influencer-list-page">
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
              <h1 className="head-1 typo pb-1">Explore your 12 song(s)</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Songs section */}
      <section className="songs-section container mt-2 mb-5">
        <div className="songs-header">
          <div className="search-contain">
            <i className="material-icons">search</i>
            <input
              type="text"
              placeholder="Search from songs"
              className="search-input"
            />
          </div>
          <div className="layout-ctrl-contain">
            <button
              className={`btn layout-btn ${currentLayout === 1 && "active"}`}
              onClick={() => switchLayout(1)}
            >
              <i className="material-icons">grid_view</i>
            </button>
            <button
              className={`btn layout-btn ${currentLayout === 2 && "active"}`}
              onClick={() => switchLayout(2)}
            >
              <i className="material-icons">view_list</i>
            </button>
          </div>
        </div>
        <div
          className={`songs-contain ${
            currentLayout === 1 ? "grid-view" : "list-view"
          }`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
            <div
              key={num}
              className={`album-item ${currentLayout === 2 && "list-view"}`}
            >
              <div className="item-img">
                <img src={songImg} alt="" className="album-img" />
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
                        <img src={spotifyIcon} alt="" className="listen-img" />
                      </a>
                      <a href="#" className="option">
                        <img src={spotifyIcon} alt="" className="listen-img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-desc">
                <div className="song-desc">
                  <h4 className="head-4 song-name">Havana</h4>
                  <p className="lead-2 med singer-name">Camillo Cabello</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default InfluencerList;
