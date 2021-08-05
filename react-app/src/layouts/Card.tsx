import React from "react";
import songImg from "../img/recom_song_2.jpg";

const Card = () => {
  return (
    <div className="app-card">
      <div className="card-front">
        <img src={songImg} alt="" className="song-img" />
        <div className="song-header">
          <h3 className="head-3 song-name">Attention</h3>
          <p className="lead-2 release-date">11/09/21</p>
        </div>
      </div>
      <div className="card-back">
        <h4 className="head-4 song-title">Attention</h4>
        <div className="song-stats">
          <div className="listen-stat stat">
            <p className="lead-2 listen-num num">1.5k</p>
            <p className="lead-3 listen-label label">Listens</p>
          </div>
          <div className="listen-stat stat">
            <p className="lead-2 listen-num num">1.5k</p>
            <p className="lead-3 listen-label label">Listens</p>
          </div>
        </div>
        <div className="card-back-footer">
          <div className="listen-platform footer-item">
            <p className="lead-3 label">Listen on</p>
            <div className="platform-contain">
              <button className="btn btn-secondary spotify">
                <i className="fa fa-spotify" />
              </button>
              <button className="btn btn-secondary apple">
                <i className="fa fa-apple" />
              </button>
            </div>
          </div>
          <div className="rewards footer-item">
            <p className="lead-3 label">Rewards</p>
            <div className="time-limit-contain reward-item">
              <i className="material-icons limit-icon">schedule</i>
              <p className="lead-3">20 min</p>
            </div>
            <div className="time-limit-contain rewared-item">
              <i className="fa fa-ruby" />
              <p className="lead-3">50 pts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
