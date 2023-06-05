import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignUp } = useContext(AuthContext);
  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleGoogleLogIN = () => {
    googleSignUp()
      .then((result) => {
        const logedUser = result.user;
        const userData = {
          name: logedUser.displayName,
          email: logedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then(() => {
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch(() => {
        // ..
      });
  };
  return (
    <div>
      <button className="btn my-5" type="submit" onClick={handleGoogleLogIN}>
        SignIN with Google
      </button>
    </div>
  );
};

export default SocialLogin;
