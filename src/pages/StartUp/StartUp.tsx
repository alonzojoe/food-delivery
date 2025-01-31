import { useNavigate } from "react-router-dom";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "@/store/store";
import { setUser } from "@/store/features/authSlice";
import Hero from "@/assets/images/scoot.png";

type GoogleAuthUser = {
  sub: string;
  name: string;
  email: string;
  picture: string;
};

export type AuthUser = {
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
  const dispatch = useAppDispatch();
  const handleSuccess = (response: CredentialResponse) => {
    console.log("response", response);
    if (response.credential) {
      const user: AuthUser = jwtDecode(response.credential);

      if (user) {
        localStorage.setItem("AUTH_USER", JSON.stringify(user));
        dispatch(setUser({ user: user }));
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
        <div className="flex items-center justify-center">
          <img src={Hero} className="w-auto h-[300px]" alt="Hero" />
        </div>

        <div className="mt-2">
          {/* tab */}

          <div className="text-sm font-medium text-center text-gray-500 border-b border-textDark">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-primary hover:border-primary"
                >
                  Login
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 text-primary border-b-2 border-primary rounded-t-lg active"
                  aria-current="page"
                >
                  Signup
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-3">
            <form className="mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="text-primary block text-sm font-medium mb-2"
                >
                  Username
                </label>
                <input
                  className="w-full border border-primary rounded-lg px-3 py-2 focus:outline-none ring-0 disabled:opacity-15"
                  type="text"
                  name="username"
                  id="username"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="text-primary block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  className="w-full border border-primary rounded-lg px-3 py-2 focus:outline-none ring-0 disabled:opacity-15"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </form>
          </div>

          {/* tab */}
        </div>

        <div className="mt-5">
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </div>
      </div>
    </div>
  );
};

export default StartUp;
