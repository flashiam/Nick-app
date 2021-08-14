const Auth = () => {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUri = "http://localhost:3000/spotify_auth";
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

  const scopes = ["streaming", "user-read-email", "user-read-private"];
  const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;

  return loginUrl;
};
export default Auth;
