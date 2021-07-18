import { useState } from "react";

import havana from "../img/havana.png";
import shape from "../img/shape.png";
import attention from "../img/attention.png";
import artist1 from "../img/shawn-mendes.jpg";
import artist2 from "../img/charlie-puth.png";
import artist3 from "../img/drake.jpg";
import landingArt from "../img/landing-img.svg";

import { TopTen } from "../types";

const Home = () => {
  const [topTenSongs] = useState<TopTen[]>([
    {
      id: 1,
      songImg: havana,
      songName: "Havana",
      singer: "Camillo Caballo",
      likes: 599,
      trend: 4.5,
      trendPercent: 75,
    },
    {
      id: 2,
      songImg: attention,
      songName: "Attention",
      singer: "Charlie Puth",
      likes: 1599,
      trend: 5.0,
      trendPercent: 95,
    },
    {
      id: 3,
      songImg: shape,
      songName: "Shape of you",
      singer: "Ed Sheeren",
      likes: 899,
      trend: 4.0,
      trendPercent: 85,
    },
    {
      id: 4,
      songImg: havana,
      songName: "Havana",
      singer: "Camillo Caballo",
      likes: 599,
      trend: 4.5,
      trendPercent: 75,
    },
    {
      id: 5,
      songImg: attention,
      songName: "Attention",
      singer: "Charlie Puth",
      likes: 1599,
      trend: 5.0,
      trendPercent: 95,
    },
    {
      id: 6,
      songImg: shape,
      songName: "Shape of you",
      singer: "Ed Sheeren",
      likes: 899,
      trend: 4.0,
      trendPercent: 85,
    },
    {
      id: 7,
      songImg: shape,
      songName: "Shape of you",
      singer: "Ed Sheeren",
      likes: 899,
      trend: 4.0,
      trendPercent: 85,
    },
    {
      id: 8,
      songImg: havana,
      songName: "Havana",
      singer: "Camillo Caballo",
      likes: 599,
      trend: 4.5,
      trendPercent: 75,
    },
    {
      id: 9,
      songImg: attention,
      songName: "Attention",
      singer: "Charlie Puth",
      likes: 1599,
      trend: 5.0,
      trendPercent: 95,
    },
    {
      id: 10,
      songImg: shape,
      songName: "Shape of you",
      singer: "Ed Sheeren",
      likes: 899,
      trend: 4.0,
      trendPercent: 85,
    },
  ]);
  return (
    <div className="container">
      <main className="home-page py-2">
        <section className="section landing-section mb-4">
          <div className="typo-contain">
            <h1 className="head-1 typo pb-1">When words fail music speaks</h1>
            <p className="lead-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sapien in turpis eu non tempus, sed.
            </p>
            <a href="#" className="btn btn-secondary">
              <i className="material-icons pr-0">play_circle_filled</i>
              Explore
            </a>
          </div>
          <div className="landing-showcase">
            <img
              src={landingArt}
              alt="landing illustration"
              className="landing-art"
            />
          </div>
        </section>
        <section className="section top-ten-section py-1 mb-10">
          <div className="section-header mb-2">
            <h4 className="head-4 med sub-head">Week's Top 10</h4>
            <h2>Top 10 songs being discovered this week</h2>
          </div>

          <div className="top-ten-songs songs-contain">
            {topTenSongs.map(song => (
              <div key={song.id} className="music-item">
                <div className="progress-contain">
                  <div className="song-progress">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle
                        cx="70"
                        cy="70"
                        r="70"
                        style={{
                          strokeDashoffset: `calc(440 - (440 * ${song.trendPercent}) / 100)`,
                        }}
                      ></circle>
                    </svg>
                    <div className="song-img">
                      <img
                        src={song.songImg}
                        alt="song img"
                        // className="song-img"
                      />
                      <div className="song-desc">
                        <div className="likes stat">
                          <i className="material-icons">favorite</i>
                          <span className="fav-count count">{song.likes}</span>
                        </div>
                        <div className="trend stat">
                          <i className="material-icons">trending_up</i>
                          <span className="trend-count count">
                            {song.trend}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="song-desc">
                  <h4 className="head-4">{song.songName}</h4>
                  <p className="lead-2">{song.singer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section trending-section py-1 mb-10">
          <div className="section-header mb-2">
            <h4 className="head-4 med sub-head">Trending Today</h4>
            <h2>Trending songs of the day</h2>
          </div>
          <div className="trending-contain">
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="trending-song song-progress-item">
                <div className="song-img-contain">
                  <img src={attention} alt="" className="song-img" />
                </div>
                <div className="song-desc-contain">
                  <div className="song-desc">
                    <h4 className="head-4">Attention</h4>
                    <p className="lead-2 med">Charlie Puth</p>
                  </div>
                  <div className="song-desc">
                    <div className="song-stat">
                      <span className="lead-2">No. of times played</span>
                      <span className="stat-badge">
                        <i className="fa fa-music semi-med" />
                        <span className="stat-count">599</span>
                      </span>
                    </div>
                    <div className="song-stat">
                      <span className="lead-2">Total scrobbles</span>
                      <span className="stat-badge">
                        <i className="fa fa-save semi-med" />
                        <span className="stat-count">599</span>
                      </span>
                    </div>
                  </div>
                  {/* Trend progress */}
                  <div className="trend-progress bg-secondary"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section artist-section py-1 mb-10">
          <div className="section-header mb-2">
            <h4 className="head-4 med sub-head">Top Artists</h4>
            <h2>World's top artists</h2>
          </div>
          <div className="top-artists songs-contain">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <div className="music-item">
                <div className="progress-contain">
                  <div className="song-progress">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle
                        cx="70"
                        cy="70"
                        r="70"
                        style={{
                          strokeDashoffset: `calc(440 - (440 * 80) / 100)`,
                        }}
                      ></circle>
                    </svg>
                    <div className="song-img">
                      <img
                        src={artist1}
                        alt="song img"
                        // className="song-img"
                      />
                      <div className="song-desc">
                        <div className="likes stat">
                          <i className="material-icons">favorite</i>
                          <span className="fav-count count">999</span>
                        </div>
                        <div className="trend stat">
                          <i className="material-icons">trending_up</i>
                          <span className="trend-count count">540</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="song-desc">
                  <h4 className="head-4">Shawn Mendes</h4>
                </div>
              </div>
            ))}
            {/* <div className="song-card">
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
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
