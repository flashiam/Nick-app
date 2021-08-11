import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const SaveSpotify = () => {
  const [spotifyToken, setSpotifyToken] = useState<string>("");

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    setSpotifyToken(code ? code : "");

    const spotify = {
      eventType: "link-spotify",
      account: "spotify",
      token: spotifyToken,
    };

    window.opener && window.opener.postMessage(spotify, "*");
    window.close();
  }, [spotifyToken, window]);

  return (
    <Card>
      <div>
        <Spinner animation="grow"></Spinner>
        <p>{spotifyToken}</p>
      </div>
    </Card>
  );
};

export default SaveSpotify;
