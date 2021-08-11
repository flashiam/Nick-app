import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const SaveDiscord = () => {
  const [discordToken, setDiscordToken] = useState<string>("");

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    const serverid = new URLSearchParams(window.location.search).get(
      "guild_id"
    );
    setDiscordToken(code ? code : "");

    const discord = {
      eventType: "discord",
      token: code,
      server: serverid,
    };

    // winodow.opener referencing to the window which opened the popup window (parent window)
    if (window.opener) window.opener.postMessage(discord, "*");

    // Close the window after the response
    window.close();
  }, [discordToken]);

  return (
    <Card>
      <div>
        <Spinner animation="grow"></Spinner>
        <p>{discordToken}</p>
      </div>
    </Card>
  );
};

export default SaveDiscord;
