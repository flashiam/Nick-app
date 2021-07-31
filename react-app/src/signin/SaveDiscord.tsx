import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

import { discordLogin } from "../actions/authActions";

type Props = {
  auth: {
    authToken: string;
  };
  discordLogin?: Function;
};

const SaveDiscord = ({ auth: { authToken }, discordLogin }: Props) => {
  const history = useHistory();
  const [spotifyToken, setSpotifyToken] = useState<string>("");

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    const serverid = new URLSearchParams(window.location.search).get(
      "guild_id"
    );
    setSpotifyToken(code ? code : "");

    const discord = {
      eventType: "discord",
      token: code,
      server: serverid,
    };

    // const userData = {
    //   token: authToken,
    //   discord: {
    //     token: code,
    //     server: serverid,
    //   },
    // };
    if (window.opener) window.opener.postMessage(discord, "*");

    // localStorage.setItem("discord-auth", JSON.stringify(discord));
    // localStorage.setItem("discordToken", code ? code : "")
    // localStorage.setItem("discordServer", serverid ? serverid : "")
    // history.push({ pathname: "/" });
    window.close();
  }, [spotifyToken]);

  return (
    <Card>
      <div>
        <Spinner animation="grow"></Spinner>
        <p>{spotifyToken}</p>
      </div>
    </Card>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { discordLogin })(SaveDiscord);
