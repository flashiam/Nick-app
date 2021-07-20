import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

import albumArt from "../img/recom_song_2.jpg";
import spotifyLogo from "../img/Spotify_Logo_Green.png";
import appleMusic from "../img/apple-music-2.png";
import attention from "../img/attention.png";
import havana from "../img/havana.png";
import shape from "../img/shape.png";

import { Song } from "../types";

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

  const modalBackdrop = useRef<HTMLDivElement>(null);

  const [modalOpen, setModal] = useState<boolean>(false);
  const [songOptions] = useState<Song[]>([
    {
      id: 1,
      songImg: attention,
      songName: "Attention",
      singerName: "Charlie Puth",
      creationDate: "12/02/2021",
      isPromoted: false,
      platform: "Spotify",
      isChecked: false,
    },
    {
      id: 2,
      songImg: havana,
      songName: "Havana",
      singerName: "Camila Cabello",
      creationDate: "12/02/2021",
      isPromoted: false,
      platform: "Apple music",
      isChecked: false,
    },
    {
      id: 3,
      songImg: shape,
      songName: "Shape of you",
      singerName: "Ed Sheeren",
      creationDate: "12/02/2021",
      isPromoted: false,
      platform: "Spotify",
      isChecked: false,
    },
    {
      id: 4,
      songImg: attention,
      songName: "Attention",
      singerName: "Charlie Puth",
      creationDate: "12/02/2021",
      isPromoted: false,
      platform: "Spotify",
      isChecked: false,
    },
    {
      id: 5,
      songImg: havana,
      songName: "Havana",
      singerName: "Camila Cabello",
      creationDate: "12/02/2021",
      isPromoted: false,
      platform: "Apple music",
      isChecked: false,
    },
    {
      id: 6,
      songImg: shape,
      songName: "Shape of you",
      singerName: "Ed Sheeren",
      creationDate: "12/02/2021",
      isPromoted: false,
      platform: "Spotify",
      isChecked: false,
    },
    {
      id: 7,
      songImg: shape,
      songName: "Shape of you",
      singerName: "Ed Sheeren",
      creationDate: "12/02/2021",
      isPromoted: false,
      platform: "Spotify",
      isChecked: false,
    },
    {
      id: 8,
      songImg: shape,
      songName: "Shape of you",
      singerName: "Ed Sheeren",
      creationDate: "12/02/2021",
      isPromoted: false,
      platform: "Spotify",
      isChecked: false,
    },
  ]);

  const ctrlOverflow = () => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Function to close the modal on backdrop press
  const backdropClose = (e: any) => {
    if (modalOpen) {
      if (e.target.classList.contains("promote-modal")) {
        setModal(false);
      }
    }
  };

  useEffect(() => {
    ctrlOverflow();
  }, [modalOpen]);

  return (
    <main className="influencer-page">
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
                Hey John , see all your recent activities on{" "}
                <span className="secondary">Musix</span>
              </h1>
              <button
                className="btn btn-secondary promote-btn"
                onClick={() => setModal(true)}
              >
                <p className="lead-2">Lets Promote</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Highly promoted albums */}
      <section className="promoted-album-contain mb-6 container">
        <div className="promote-header">
          <h2 className="head-2 pb-1">Highly promoted albums</h2>
        </div>
        <div className="albums-contain">
          <div className="album-item">
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
              </div>
            </div>
            <div className="item-desc">
              <h4 className="head-4 song-name">Pain</h4>
              <p className="lead-2 med promoted-on">11th July 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section showing albums promoted on various platforms */}
      <section className="total-albums-contain container">
        <h2 className="head-2 pb-1">
          Your albums blasting on various platforms
        </h2>
        {/* Albums on platform */}
        <div className="platform-albums spotify-albums mb-4">
          <div className="platform-header">
            <img src={spotifyLogo} alt="" className="platform-logo pb-0" />
          </div>
          <div className="albums-contain">
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
          </div>
        </div>

        {/* Albums on platform */}
        <div className="platform-albums apple-music-albums mb-4">
          <div className="platform-header">
            <img src={appleMusic} alt="" className="platform-logo pb-0" />
          </div>
          <div className="albums-contain">
            <Carousel responsive={responsive} swipeable draggable>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <div key={num} className="album-item mt-1">
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
          </div>
        </div>
      </section>

      {/* Songs section */}
      <section className="songs-section container">
        <div className="songs-header">
          <h2 className="head-2 pb-1">Your curated lists of songs</h2>
          <Link to="/influencer/songs" className="more-btn secondary">
            More
          </Link>
        </div>
        <div className="songs-contain">
          <Carousel responsive={responsive} swipeable draggable>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
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
      {/* Promote modal */}
      <div
        ref={modalBackdrop}
        className={`promote-modal ${modalOpen ? "active" : "inactive"}`}
        onClick={backdropClose}
      >
        <div className={`modal-content ${modalOpen ? "active" : "inactive"}`}>
          <div className="modal-form p-1">
            <h3 className="head-3">Promote your album</h3>
            <div className="form-contain">
              <div className="form-grp">
                <label htmlFor="server">Select promotion server</label>
                <select name="server" className="server-select-box">
                  <option value="discord">Discord Server</option>
                </select>
              </div>
              <div className="bottom-form-contain">
                <div className="form-grp">
                  <label htmlFor="listen">Set listen limit</label>
                  <input type="number" name="listen" className="listen-input" />
                </div>
                <div className="points-contain">
                  <p className="lead-2">Giveaway points</p>
                  <span className="points">56</span>
                </div>
              </div>
            </div>
            <div className="btn-grp">
              <button
                className="btn btn-transparent secondary"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-secondary">Promote</button>
            </div>
          </div>
          <div className="modal-showcase">
            <i className="material-icons primary">campaign</i>
            <div className="select-songs-contain">
              <h4 className="head-4">Select songs to promote</h4>
              <button className="btn btn-transparent secondary">
                Select all
              </button>
              <div className="song-list-contain">
                {songOptions.map(song => (
                  <div key={song.id} className="song-item bg-purple">
                    <div className="checkbox-contain">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={song.isChecked}
                      />
                      <div className="song-checkbox">
                        <i className="material-icons">done</i>
                      </div>
                    </div>
                    <div className="song-img-contain">
                      <img src={song.songImg} alt="" className="song-img" />
                    </div>
                    <div className="song-desc">
                      <h5 className="head-5">{song.songName}</h5>
                      <p className="lead-2 med">{song.singerName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Influencer;
