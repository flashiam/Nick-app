import { useState } from "react";
import { connect } from "react-redux";
import BackBtn from "../layouts/BackBtn";
import Card from "../layouts/Card";
import songImg from "../img/attention.png";
import memberImg from "../img/charlie-puth.png";
import memberImg2 from "../img/havana.png";

type Props = {
  auth: {
    userDetails: any;
    authToken: string;
  };
};

const GeneralProfile = ({
  auth: { userDetails, authToken, userType },
}: any) => {
  const [options, setOptions] = useState<string>("tickets");

  // Component for tickets
  const Tickets = () => {
    return (
      <div id="profile-section-1" className="tickets-section profile-section">
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
                <button className="btn btn-disabled claim-btn points desktop-btn">
                  <p className="lead-2">Claim</p>
                  <i className="material-icons">monetization_on</i>
                  <p className="lead-2">200 pts</p>
                </button>
                <button className="btn btn-disabled claim-btn mobo-btn">
                  <i className="material-icons">monetization_on</i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Component for servers
  const Servers = () => {
    return (
      <div id="profile-section-2" className="server-section profile-section">
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
                      <img src={memberImg2} alt="" className="profile-img" />
                    </div>
                  </div>
                  <span className="members-count">+15 more</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Component for promoted songs
  const PromotedSongs = () => {
    return (
      <div id="profile-section-3" className="promoted-section profile-section">
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
    );
  };

  // Component for leaderboards
  const Leaderboards = () => {
    return (
      <div
        id="profile-section-4"
        className="leaderboard-section profile-section"
      >
        <h2 className="head-2">Leaderboards</h2>
        <div className="leaderboard-header mt-3">
          <div className="top-three-contain">
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

            <div className="top-user third-user">
              <div className="user-position">3</div>
              <div className="user-profile-pic">
                <img src={memberImg} alt="" className="user-img" />
              </div>
              <div className="top-user-desc">
                <p className="lead-2">559 pts</p>
                <p className="lead">Brad</p>
              </div>
            </div>
          </div>
        </div>
        <div className="leaderboard-section mt-5">
          <div className="leaderboard-list">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <div key={num} className="leaderboard-list-item">
                <div className="user-position item-row">4</div>
                <div className="user-profile item-row">
                  <img src={memberImg} alt="" className="user-pic" />
                  <p className="lead">John Doe</p>
                </div>
                <div className="earned-points item-row">
                  <i className="material-icons">monetization_on</i>
                  <p className="lead">220 pts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="user-profile">
      <div className="container">
        <div className="top-header">
          <BackBtn />
        </div>
        <div className="main-profile">
          <section className="profile-control">
            <div className="user-profile-contain">
              <div className="profile-pic">
                {authToken ? (
                  <img
                    src={userDetails?.picture}
                    alt="user profile"
                    className="user-pic"
                  />
                ) : (
                  <i className="material-icons">account_circle</i>
                )}
              </div>
              <div className="user-desig ml-2">
                <h3 className="head-3 username">{userDetails?.name}</h3>
                <span className="user-badge">{userType || "Common"}</span>
              </div>
            </div>
            <div className="profile-links-contain mt-5">
              <h4 className="head-4">Menu</h4>
              <ul className="profile-links mt-3">
                <li className="profile-link">
                  <button
                    className={`btn btn-transparent ${
                      options === "tickets" && "active"
                    }`}
                    onClick={() => setOptions("tickets")}
                  >
                    <i className="material-icons">monetization_on</i>
                    Tickets
                  </button>
                </li>
                <li className="profile-link">
                  <button
                    className={`btn btn-transparent ${
                      options === "servers" && "active"
                    }`}
                    onClick={() => setOptions("servers")}
                  >
                    <i className="material-icons">dns</i>
                    Servers
                  </button>
                </li>
                <li className="profile-link">
                  <button
                    className={`btn btn-transparent ${
                      options === "promoted-songs" && "active"
                    }`}
                    onClick={() => setOptions("promoted-songs")}
                  >
                    <i className="material-icons">library_music</i>
                    Promoted Songs
                  </button>
                </li>
                <li className="profile-link">
                  <button
                    className={`btn btn-transparent ${
                      options === "leaderboards" && "active"
                    }`}
                    onClick={() => setOptions("leaderboards")}
                  >
                    <i className="material-icons">emoji_events</i>
                    Leaderboards
                  </button>
                </li>
              </ul>
            </div>
          </section>
          <section className="profile-showcase">
            {options === "tickets" && <Tickets />}
            {options === "servers" && <Servers />}
            {options === "promoted-songs" && <PromotedSongs />}
            {options === "leaderboards" && <Leaderboards />}
          </section>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(GeneralProfile);
