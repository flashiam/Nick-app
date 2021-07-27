import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import discordLogo from "../img/discord.svg";
import { Button } from "react-bootstrap";


const SignInDiscord = () => {

  const verifyUrl = "https://discord.com/api/oauth2/authorize?client_id=864222264526372894&permissions=0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=bot%20guilds.join%20guilds%20gdm.join%20webhook.incoming%20activities.read%20activities.write%20identify"
 
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
        <Button onClick={()=>{window.open(verifyUrl, 'newwindow', 'width=500,height=700')}} className="btn auth-btn discord-btn">
          Connect to discord
        </Button>
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
}
export default SignInDiscord;
