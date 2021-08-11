const Auth = () => {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUri = "http://ec2-18-223-0-1.us-east-2.compute.amazonaws.com/spotify_auth";
  const clientId = "5ae83f24f60546e4bb274b94bf48569c";

  const scopes = ["streaming", "user-read-email", "user-read-private"];
  const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;

  return loginUrl;
};
export default Auth;
