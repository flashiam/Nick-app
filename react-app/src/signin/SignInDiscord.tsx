import { Link } from "react-router-dom";
import { connect } from "react-redux";
import discordLogo from "../img/discord.svg";

// import { userSignIn } from "../actions/authActions";

type Props = {
  authenticateUser: Function;
};

const SignInDiscord = ({ authenticateUser }: Props) => {
  return (
    <main className="sign-in-discord bg-semi-med p-1">
      <div className="inner-content">
        <img src={discordLogo} alt="" className="discord-logo" />
        <h3 className="head-3 primary">
          Connect your discord account to get the most out of Musix
        </h3>
        <button
          className="btn auth-btn discord-btn"
          onClick={() => authenticateUser()}
        >
          Connect to discord
        </button>
      </div>
    </main>
  );
};

export default SignInDiscord;
