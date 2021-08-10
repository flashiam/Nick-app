import { useEffect, useState } from "react";
import { connect } from "react-redux";
import discordLogo from "../img/discord.svg";

import { discordLogin, flushSignInFlow } from "../actions/authActions";
import { Discord } from "../types";

type Props = {
  discordLogin?: Function;
  flushSignInFlow?: Function;
};

const SignInDiscord = ({ discordLogin, flushSignInFlow }: Props) => {
  const [discordData, setData] = useState<Discord>();
  const discordClientId = process.env.REACT_APP_DISCORD_CLIENT_ID;
  // const verifyUrl = `https://discord.com/api/oauth2/authorize?client_id=${discordClientId}&permissions=8&redirect_uri=http%3A%2F%2Fec2-18-223-0-1.us-east-2.compute.amazonaws.com%2Fdiscord_signup&response_type=code&scope=bot%20guilds%20guilds.join%20email%20identify`;
  const verifyUrl = `https://discord.com/api/oauth2/authorize?client_id=${discordClientId}&permissions=52076480656&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord_signup&response_type=code&scope=email%20identify%20bot`;

  // Function to open discord pop up window
  const openDiscord = () => {
    window.open(verifyUrl, "newwindow", "width=500,height=700");
    window.name = "discord";
  };

  useEffect(() => {
    window.addEventListener("message", e => {
      if (e.data.eventType === "discord") {
        setData(e.data);
      }
    });
  }, [window]);

  useEffect(() => {
    if (discordData) {
      discordLogin && discordLogin(discordData);
      flushSignInFlow && flushSignInFlow();
    }
  }, [discordData]);

  return (
    <main className="sign-in-discord bg-semi-med p-1">
      <div className="inner-content">
        <img src={discordLogo} alt="" className="discord-logo" />
        <h3 className="head-3 primary">
          Connect your discord account to get the most out of Musix
        </h3>
        <button className="btn auth-btn discord-btn" onClick={openDiscord}>
          Connect to discord
        </button>
      </div>
    </main>
  );
};

export default connect(null, { discordLogin, flushSignInFlow })(SignInDiscord);
