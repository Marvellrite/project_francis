import "../styles/_Login.scss";
import Label_input from "./building_blocks/label_input";
import Notify_modal from "./Notify_modal";
import { FaCheck } from "react-icons/fa6";

const Register = () => {
  return (
    <section className="form_section d-flex vh-100 align-items-center">
      <div className="container shadow-sm rounded bg-white ">
        <div className=" row mx-0 h-100 justify-content-center border border-2 border-prime border-top-0 border-bottom-0">
          {/* <div className="image_holder col-6">
            <img src={Vote_image} alt="Vote image" className="img-fluid" />
          </div> */}
          <div className="d-flex flex-column">
            <h4 className="text-center pt-4 fw-medium">
              Password Reset for{" "}
              <span className="text-prime fw-semibold">De.2020/9393</span>
            </h4>
            <form action="" className="row flex-column gy-3 mx-0 pt-5">
              <div className=" d-flex flex-column">
                <label
                  htmlFor="newPassword"
                  className=" form-label fw-medium text-secondary mb-1">
                  New Password
                </label>
                <Label_input type="password" id="newPassword" required={true} />
              </div>

              <div className=" d-flex flex-column">
                <label
                  htmlFor="newPassword"
                  className=" form-label fw-medium text-secondary mb-1">
                  Confirm Password
                </label>
                <Label_input type="password" id="newPassword" required={true} />
              </div>
              <div className="submit_btn text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-prime text-white fw-bold">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Notify_modal icon={<FaCheck></FaCheck>} color="rgb(40, 167, 69)">
        Password reset successful!
      </Notify_modal> */}
    </section>
  );
};

export default Register;
