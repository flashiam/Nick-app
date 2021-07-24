import { Link } from "react-router-dom";
import discordLogo from "../img/discord.svg";

const SignInDiscord = () => {
  return (
    <main className="sign-in-discord bg-semi-med p-1">
      <div className="inner-content">
        <img src={discordLogo} alt="" className="discord-logo" />
        <h3 className="head-3 primary">
          Connect your discord account to get the most out of Musix
        </h3>
        <Link to="/" className="btn auth-btn discord-btn">
          Connect to discord
        </Link>
      </div>
    </main>
  );
};

export default SignInDiscord;
