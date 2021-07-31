import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import discordLogo from "../img/discord.svg";
import { Button } from "react-bootstrap";

<<<<<<< HEAD
// import { userSignIn } from "../actions/authActions";

type Props = {
  authenticateUser: Function;
};

const SignInDiscord = () => {
  const verifyUrl =
    "https://discord.com/oauth2/authorize?client_id=864222264526372894&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify%20email%20guilds%20guilds.join%20gdm.join%20rpc%20bot%20webhook.incoming%20activities.read%20activities.write";
=======
const SignInDiscord = () => {
  const verifyUrl =
    "https://discord.com/api/oauth2/authorize?client_id=864222264526372894&permissions=0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord_signup&response_type=code&scope=identify%20guilds%20guilds.join%20gdm.join%20bot";

  // import { userSignIn } from "../actions/authActions";
  // const wind = new Window()
  type Props = {
    authenticateUser: Function;
  };
>>>>>>> 9f678d4257d9792b2054d9b70d06e7ffa6a8766e

  return (
    <main className="sign-in-discord bg-semi-med p-1">
      <div className="inner-content">
        <img src={discordLogo} alt="" className="discord-logo" />
        <h3 className="head-3 primary">
          Connect your discord account to get the most out of Musix
        </h3>
        {/* <Button className="btn auth-btn discord-btn">
          Connect to discord
        </Button> */}
        <button
          className="btn auth-btn discord-btn"
          onClick={() => {
<<<<<<< HEAD
            window.open(verifyUrl, "newwindow", "width=500,height=700");
            // window.close();
            // window.open("https://discord.com", "_blank");
=======
            window.open(verifyUrl, "newwindow", "width=500,height=700")
            window.name = "discord"
>>>>>>> 9f678d4257d9792b2054d9b70d06e7ffa6a8766e
          }}
        >
          Connect to discord
        </button>
      </div>
    </main>
  );
};

export default SignInDiscord;
