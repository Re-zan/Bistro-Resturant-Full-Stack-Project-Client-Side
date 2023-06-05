import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/others/authentication.png";
import img2 from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLogin from "../../components/SocialLogIn/SocialLogin";

const SignIN = () => {
  const { logIn } = useContext(AuthContext);
  let location = useLocation();

  const [eror, setError] = useState("");
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(" ");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    // let user_captcha = document.getElementById("user_captcha_input").value;

    // if (validateCaptcha(user_captcha) === true) {
    //   alert("Captcha Matched");
    //   document.getElementById("user_captcha_input").value = "";
    // } else {
    //   alert("Captcha Does Not Match");
    //   document.getElementById("user_captcha_input").value = "";
    // }
  };
  const handleCapcted = (e) => {
    const user_captcha = e.target.value;
    if (validateCaptcha(user_captcha) === true) {
      setDisabled(false);
    } else {
      // alert("no miler ca vala kori");
      setDisabled(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="  min-h-screen py-10"
    >
      <div
        className="my_container grid grid-cols-1 md:grid-cols-2 py-20  h-full shadow-2xl gap-10"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          {" "}
          <img src={img2} alt="" />
        </div>
        <div>
          <h2 className="text-center">Sign IN</h2>

          <Form className=" mx-auto" onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type email"
                className="input input-bordered w-full max-w-xs"
                required
                name="email"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type password"
                className="input input-bordered w-full max-w-xs"
                required
                name="password"
              />
            </div>
            <div className="form-control w-full max-w-xs my-4">
              <label className="label w-full max-w-xs">
                <LoadCanvasTemplate />
              </label>

              <input
                type="text"
                placeholder="Type the captached"
                className="input input-bordered w-full max-w-xs"
                id="user_captcha_input"
                name="user_captcha_input"
                onBlur={handleCapcted}
              />
            </div>

            <p className="text-red-800"> {eror}</p>

            <button className="btn my-5" type="submit" disabled={false}>
              SignIN
            </button>
          </Form>
          <SocialLogin></SocialLogin>
          <Link to="/signUp" className="link link-secondary ">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIN;
