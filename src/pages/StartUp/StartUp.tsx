import { useNavigate } from "react-router-dom";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
type GoogleAuthUser = {
  sub: string;
  name: string;
  email: string;
  picture: string;
};

export type GoogleUser = {
  iss: string;
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
};

const StartUp = () => {
  const navigate = useNavigate();
  const handleSuccess = (response: CredentialResponse) => {
    console.log("response", response);
    if (response.credential) {
      const user: GoogleAuthUser = jwtDecode(response.credential);

      if (user) {
        localStorage.setItem("AUTH_USER", JSON.stringify(user));
      }

      navigate("/home");
      return user;
    }
  };

  const handleError = () => {
    console.log("There was an error while signing Google OAuth");
  };

  return (
    <div className="h-dvh ">
      <div className="container flex flex-col mt-10 px-8">
        <h1>Login</h1>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </div>
  );
};

export default StartUp;
