import "../styles/_Login.scss";
import { Link } from "react-router-dom";
// import Vote_image from "../assets/vote/login_2.jpg";
import Label_input from "./building_blocks/label_input.tsx";
import { FaUser } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import Notify_Modal from "./Notify_modal.tsx";
import { FaCircleXmark } from "react-icons/fa6";
import Loader from "./building_blocks/loader.tsx";

const Login = () => {
  return (
    <section className="form_section d-flex vh-100 align-items-center">
      <div className="container shadow-sm rounded bg-white">
        <div className="h-100 row mx-0 align-items-center justify-content-center border border-2 border-prime border-top-0 border-bottom-0">
          {/* <div className="image_holder col-6">
            <img src={Vote_image} alt="Vote image" className="img-fluid" />
          </div> */}
          <form action="" className="row flex-column">
            <h1 className="text-center fw-bold  text-prime">Welcome Back</h1>
            <Label_input
              placeholder="Matric No. or hostname"
              Icon={FaUser}
              type="text"
              required={true}
            />
            <Label_input
              placeholder="Password"
              Icon={FaUserSecret}
              type="password"
              required={true}
            />
            <div className="text-end mt-3">
              <Link
                to="/reset_password"
                className=" link-body-emphasis link-underline-opacity-0 fs-6">
                Forgot your password?
              </Link>
            </div>
            <div className="submit_btn text-center mt-3">
              <button
                type="submit"
                className="btn btn-prime text-white fw-bold">
                Login
              </button>
            </div>
            <div className="text-center mt-3">
              Don't have account?{" "}
              <Link
                to={"/register"}
                className=" fw-medium text-decoration-none text-prime">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* <Notify_Modal icon={<FaCircleXmark></FaCircleXmark>} color='rgb(220, 53, 69)'>
        Email and password combination not found.
      </Notify_Modal> */}
      {/* <Loader>Logging you in</Loader> */}
    </section>
  );
};

export default Login;
