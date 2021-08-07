type Props = {
  songImg: string;
  songName: string;
  releaseDate: string;
  totalListens: number;
  totalFollowers: number;
  listenLimit?: number;
  points?: number;
  user: string;
  isPromoted?: boolean;
};

const Card = ({
  songImg,
  songName,
  releaseDate,
  totalListens,
  totalFollowers,
  listenLimit,
  points,
  user,
  isPromoted,
}: Props) => {
  return (
    <div className="app-card">
      <div className="card-front">
        <img src={songImg} alt="" className="song-img" />
        <div className="song-header">
          <h3 className="head-3 song-name">{songName}</h3>
          <p className="lead-2 release-date">{releaseDate}</p>
        </div>
      </div>
      <div className="card-back">
        <h4 className="head-4 song-title">{songName}</h4>
        <div className="song-stats">
          <div className="stats-contain">
            <div className="listen-stat stat">
              <p className="lead-2 listen-num num">{totalListens}</p>
              <p className="lead-3 listen-label label">Listens</p>
            </div>
            <div className="listen-stat stat">
              <p className="lead-2 listen-num num">{totalFollowers}</p>
              <p className="lead-3 listen-label label">Followers</p>
            </div>
          </div>
        </div>
        <div className="card-back-footer">
          <div className="listen-platform footer-item">
            <p className="lead-3 label">Listen on</p>
            <div className="platform-contain">
              <button className="btn btn-secondary btn-round spotify">
                <i className="fa fa-spotify" />
              </button>
              <button className="btn btn-secondary btn-round apple">
                <i className="fa fa-apple" />
              </button>
            </div>
          </div>
          {user === "general" ? (
            <div className="rewards footer-item">
              <div className="top-title">
                <div className="info-contain">
                  <span className="info-btn">i</span>
                  <div className="info-msg">
                    Get {points} points on listening this song for altleast{" "}
                    {listenLimit} min
                  </div>
                </div>
                <p className="lead-3 label">Rewards</p>
              </div>
              <div className="rewards-contain">
                <div className="time-limit-contain reward-item">
                  <i className="material-icons limit-icon">schedule</i>
                  <p className="lead-3">{listenLimit} min</p>
                </div>
                <div className="time-limit-contain reward-item">
                  <i className="material-icons-outlined">monetization_on</i>
                  <p className="lead-3">{points} pts</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="promotion footer-item">
              <div className="top-title">
                <span
                  className={`promote-indicator ${
                    isPromoted ? "bg-success" : "bg-danger"
                  }`}
                ></span>
                <p
                  className={`lead-3 ${
                    isPromoted ? "success" : "danger"
                  } promotion label`}
                >
                  {isPromoted ? "Promoted" : "Not Promoted"}
                </p>
              </div>
              {isPromoted ? (
                <>
                  <button className="btn btn-secondary-stroked desktop-btn">
                    Stop Promotion
                  </button>
                  <button className="btn btn-round btn-secondary-stroked promote-btn">
                    <i className="fa fa-ban" />
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-secondary">Start Promotion</button>
                  <button className="btn btn-round btn-secondary promote-btn">
                    <i className="fa fa-bullhorn" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
