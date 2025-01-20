import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
type GoogleAuthUser = {
  sub: string;
  name: string;
  email: string;
  picture: string;
};

const StartUp = () => {
  const navigate = useNavigate();
  const handleSuccess = (response: any) => {
    const user: GoogleAuthUser = jwtDecode(response.credential);

    if (user) {
      localStorage.setItem("AUTH_USER", JSON.stringify(user));
    }

    navigate("/home");
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
