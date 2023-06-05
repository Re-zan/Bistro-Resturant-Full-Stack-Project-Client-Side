import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/others/authentication.png";
import img2 from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLogin from "../../components/SocialLogIn/SocialLogin";
const SignUp = () => {
  const { creatUser, updateProfileUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    creatUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateProfileUser(loggedUser, data.name)
          .then(() => {
            const userData = {
              name: loggedUser.displayName,
              email: loggedUser.email,
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then(() => {
                console.log(loggedUser);
                reset();
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
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
          <h2 className=" text-3xl font-semibold">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type nmae"
                className="input input-bordered w-full max-w-xs"
                {...register("name", { required: true })}
                name="name"
              />
              {errors.name && (
                <span className="text-red-800">This field is required</span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", { required: true })}
                name="email"
              />
              {errors.email && (
                <span className="text-red-800">This field is required</span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                })}
                name="password"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-800">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-800">Must have 8 char</span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-800">10 cha up not allowed</span>
              )}
            </div>

            <button className="btn my-5" type="submit">
              Sign Up
            </button>
          </form>
          <SocialLogin></SocialLogin>
          <Link to="/signIn" className="link link-secondary ">
            Already have an account / LogIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
