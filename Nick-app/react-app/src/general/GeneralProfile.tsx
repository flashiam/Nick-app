import Card from "../layouts/Card";
import songImg from "../img/attention.png";
import memberImg from "../img/charlie-puth.png";
import memberImg2 from "../img/havana.png";

const GeneralProfile = () => {
  return (
    <main className="user-profile">
      <div className="container">
        <section className="profile-control">
          <div className="user-profile-contain">
            <div className="profile-pic">
              <i className="material-icons">account_circle</i>
              {/* {userDetails?.picture ? (
                        <img
                        src={userDetails?.picture}
                        alt="user profile"
                        className="user-pic"
                        />
                    ) : (
                        <i className="material-icons">account_circle</i>
                    )} */}
            </div>
            <div className="user-desig ml-2">
              <h3 className="head-3 username">John Doe</h3>
              <span className="user-badge">General</span>
            </div>
          </div>
          <div className="profile-links-contain mt-5">
            <h4 className="head-4">Menu</h4>
            <ul className="profile-links mt-3">
              <li className="profile-link">
                <a href="#profile-section-1" className="link">
                  <i className="material-icons">monetization_on</i>
                  Tickets
                </a>
              </li>
              <li className="profile-link">
                <a href="#profile-section-2" className="link">
                  <i className="material-icons">dns</i>
                  Servers
                </a>
              </li>
              <li className="profile-link">
                <a href="#profile-section-3" className="link">
                  <i className="material-icons">library_music</i>
                  Promoted Songs
                </a>
              </li>
              <li className="profile-link">
                <a href="#profile-section-4" className="link">
                  <i className="material-icons">emoji_events</i>
                  Leaderboards
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="profile-showcase">
          <div
            id="profile-section-1"
            className="tickets-section profile-section"
          >
            <div className="tickets-header">
              <h2 className="head-2">Tickets</h2>
              <div className="points-showcase">
                <i className="material-icons">monetization_on</i>
                250 pts
              </div>
            </div>

            <div className="ticket-status-contain mt-4">
              {[1, 2, 3, 4].map(num => (
                <div key={num} className="status-item mb-1">
                  <div className="song-img">
                    <img src={songImg} alt="" />
                  </div>
                  <div className="status-progress">
                    <div className="progress-desc">
                      <p className="lead-2">Attention</p>
                      <div className="time-marker">
                        <i className="material-icons">schedule</i>
                        <span className="time">1:05&nbsp;/&nbsp;2:00</span>
                      </div>
                    </div>
                    <div className="progress-contain mt-1">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div className="points-contain">
                    <button className="btn btn-disabled claim-btn points">
                      <p className="lead-2">Claim</p>
                      <i className="material-icons">monetization_on</i>
                      <p className="lead-2">200 pts</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="profile-section-2"
            className="server-section profile-section"
          >
            <h2 className="head-2">Added Servers</h2>
            <div className="servers-contain mt-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <div key={num} className="server-item">
                  <div className="server-showcase">
                    <div className="server-logo">
                      <i className="fa fa-hdd" />
                    </div>
                    <p className="lead-2 pt-0">Server 1</p>
                  </div>
                  <div className="server-members mt-2">
                    <p className="lead">Members</p>
                    <div className="members-contain">
                      <div className="members-profiles">
                        <div className="profile">
                          <img src={memberImg} alt="" className="profile-img" />
                        </div>
                        <div className="profile">
                          <img
                            src={memberImg2}
                            alt=""
                            className="profile-img"
                          />
                        </div>
                      </div>
                      <span className="members-count">+15 more</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="profile-section-3"
            className="promoted-section profile-section"
          >
            <div className="songs-header">
              <h2 className="head-2">Promoted Songs</h2>
              <p className="lead-2">5 Songs</p>
            </div>
            <div className="songs-contain mt-3">
              {[1, 2, 3, 4, 5].map(num => (
                <Card
                  key={num}
                  songImg={memberImg}
                  songName="Attention"
                  releaseDate="23/04/21"
                  totalListens={350}
                  totalFollowers={200}
                  points={200}
                  listenLimit={20}
                  user="general"
                  style={{ backgroundColor: "#130c28" }}
                />
              ))}
            </div>
          </div>
          <div
            id="profile-section-4"
            className="leaderboard-section profile-section"
          >
            <h2 className="head-2">Leaderboards</h2>
            {/* <div className="top-three-contain">
              <div className="top-user second-user">
                <div className="user-position">2</div>
                <div className="user-profile-pic">
                  <img src={memberImg} alt="" className="user-img" />
                </div>
                <div className="top-user-desc">
                  <p className="lead-2">550 pts</p>
                  <p className="lead">Cheap monke</p>
                </div>
              </div>

              <div className="top-user first-user">
                <div className="user-position">
                  <i className="material-icons">emoji_events</i>
                </div>
                <div className="user-profile-pic">
                  <img src={memberImg2} alt="" className="user-img" />
                </div>
                <div className="top-user-desc">
                  <p className="lead-2">1099 pts</p>
                  <p className="lead">Monica</p>
                </div>
              </div>

              <div className="top-user first-user">
                <div className="user-position">3</div>
                <div className="user-profile-pic">
                  <img src={memberImg} alt="" className="user-img" />
                </div>
                <div className="top-user-desc">
                  <p className="lead-2">559 pts</p>
                  <p className="lead">Brad</p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default GeneralProfile;
