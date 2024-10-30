// import Vote_image from "../assets/vote/login_2.jpg";
import { FaPaperPlane } from "react-icons/fa";

const Login = () => {
  return (
    <section className="form_section d-flex vh-100 align-items-center">
      <div className="container shadow-sm rounded bg-white ">
        <div className="h-100 row mx-0  justify-content-center border border-2 border-prime border-top-0 border-bottom-0 pt-5">
          {/* <div className="image_holder col-6">
            <img src={Vote_image} alt="Vote image" className="img-fluid" />
          </div> */}
          <div className="row flex-column">
            <div className="text-center" style={{ fontSize: "1.3rem" }}>
              <div style={{ fontSize: "2.8rem" }} className="text-prime">
                <FaPaperPlane />
              </div>

              <p className="mt-4">
                An email has been sent to the linked address. Check your Inbox.{" "}
              </p>
            </div>
            <div className="text-center">
              Didn't recieve it?{" "}
              <button className="btn text-prime ps-0">
                resend <span>in 120 seconds</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
