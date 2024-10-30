import "../styles/_Login.scss";
import Placeholder_3 from "./building_blocks/Placeholder_3.tsx";
import Bordered_titled_container_2 from "./building_blocks/bordered_title_contaiiner_2.tsx";
import Themed_btn from "./building_blocks/Themed_btn.tsx";
import Border_titled_container from "./building_blocks/Border_titled_container.tsx";
// import Vote_image from "../assets/vote/login_2.jpg";
import Label_input from "./building_blocks/label_input.tsx";
import { FaIdCard } from "react-icons/fa";
import { Link } from "react-rupper-dom";
import Notify_Modal from "./Notify_modal.tsx";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const Register = () => {
  return (
    <section className="form_section d-flex vh-100 align-items-center">
      <div className="container shadow-sm rounded bg-white">
        <div className="border border-2 border-prime border-top-0 border-bottom-0 h-100 overflow-y-auto">
          {/* <div className="image_holder col-6">
            <img src={Vote_image} alt="Vote image" className="img-fluid" />
          </div> */}
          <div className="pt-4">
            {/* <div className="image_holder col-6">
            <img src={Vote_image} alt="Vote image" className="img-fluid" />
          </div> */}
            <div className="col-12 text-center">
              <span className=" fw-bold">Name:</span>{" "}
              <span className=" fw-medium">Asara Chukwudi Francis</span>
            </div>
            <div className="col-12 text-center">
              <span className=" fw-bold">Matric No.:</span>{" "}
              <span className=" fw-medium">DE.2022/03022</span>
            </div>

            <div className="parameters_holder row mx-0 mt-3">
              <div>
                <span className="fw-medium">Calculate for:</span>
                <select
                  title="What is been calculated for"
                  className="form-select">
                  <option value="Speed ratio">
                    The ratio of the phase speed of fast magnetsonic waves to
                    Alfven wave speed
                  </option>
                  <option value="group velocity">
                    The group velocity of Alfven wave with equilibrium mass
                    density
                  </option>
                  <option value="TAN">
                    The TAN of propagation angle with period of oscillation of
                    Alfven wave
                  </option>
                </select>
              </div>

              {/* div containing the atmospheric Layers */}
              <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 row mx-0 mt-3 py-2">
                {/* for Photosphere layer */}
                <div className="col-12 col-md-6 gy-2">
                  <Placeholder_3
                    toggler={true}
                    border_color="prime"
                    title="Photosphere">
                    <div className="row mx-0 w-100 pb-2">
                      <div className="col-12 col-md-6 g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="lower"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_lower_photosphere">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_lower_photosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_lower_photosphere">
                                Va:
                              </label>{" "}
                              <input
                                id="va_lower_photosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                      <div className="col-12 col-md-6 g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="mid"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_mid_photosphere">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_mid_photosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_mid_photosphere">
                                Va:
                              </label>{" "}
                              <input
                                id="va_mid_photosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                      <div className="col-6 g-2 g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="upper"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_upper_photosphere">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_upper_photosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_upper_photosphere">
                                Va:
                              </label>{" "}
                              <input
                                id="va_upper_photosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                    </div>
                  </Placeholder_3>
                </div>

                {/* Second Holder */}
                <div className="col-12 col-md-6 gy-2">
                  <Placeholder_3
                    toggler={true}
                    border_color="prime"
                    title="Chromosphere">
                    <div className="row mx-0 w-100 pb-2">
                      <div className="col-12 col-md-6 g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="lower"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_lower_chromosphere">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_lower_chromosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_lower_chromosphere">
                                Va:
                              </label>{" "}
                              <input
                                id="va_lower_chromosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                      <div className="col-12 col-md-6 g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="mid"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_mid_chromosphere">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_mid_chromosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_mid_chromosphere">
                                Va:
                              </label>{" "}
                              <input
                                id="va_mid_chromosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                      <div className="col-6 g-2 g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="upper"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_upper_chromosphere">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_upper_chromosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_upper_chromosphere">
                                Va:
                              </label>{" "}
                              <input
                                id="va_upper_chromosphere"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                    </div>
                  </Placeholder_3>
                </div>

                {/* For the corona layer */}
                <div className="col-12 gy-2">
                  <Placeholder_3
                    toggler={true}
                    border_color="prime"
                    title="Corona">
                    <div className="row mx-0 w-100 pb-2">
                      <div className="col-12 col-sm-6 col-md-4 g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="lower"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_lower_corona">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_lower_corona"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_lower_corona">
                                Va:
                              </label>{" "}
                              <input
                                id="va_lower_corona"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4  g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="mid"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_mid_corona">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_mid_corona"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_mid_corona">
                                Va:
                              </label>{" "}
                              <input
                                id="va_mid_corona"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4 g-2 g-3">
                        {" "}
                        <Bordered_titled_container_2
                          title="upper"
                          border_color="prime">
                          <div className="d-flex py-3 flex-column gap-2">
                            <div className="d-flex align-items-center gap-2">
                              <label
                                className="fw-medium"
                                htmlFor="vs_upper_corona">
                                Vs:
                              </label>{" "}
                              <input
                                id="vs_upper_corona"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-2 ">
                              <label
                                className="fw-medium"
                                htmlFor="va_upper_corona">
                                Va:
                              </label>{" "}
                              <input
                                id="va_upper_corona"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Bordered_titled_container_2>
                      </div>
                    </div>
                  </Placeholder_3>
                </div>
              </div>

              {/* div containing Angles */}
              <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 row mx-0 mt-3 py-2">
                {/* for Photosphere layer */}
                <div className="col-12 col-sm-6 col-md-4  gy-2">
                  <Placeholder_3 border_color="prime" title="1st Iteration">
                    <div className=" w-100 pb-1">
                      <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                        <label htmlFor="speed_1st_iteration">
                          {" "}
                          <span className="  fs-5">&theta;:</span>
                        </label>
                        <input
                          id="speed_1st_iteration"
                          type=" number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Placeholder_3>
                </div>

                {/* Second Holder */}
                <div className="col-12 col-sm-6 col-md-4  gy-2">
                  <Placeholder_3 border_color="prime" title="1st Iteration">
                    <div className=" w-100 pb-1">
                      <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                        <label htmlFor="speed_1st_iteration">
                          {" "}
                          <span className="  fs-5">&theta;:</span>
                        </label>
                        <input
                          id="speed_1st_iteration"
                          type=" number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Placeholder_3>
                </div>

                {/* For the corona layer */}
                <div className="col-12 col-sm-6 col-md-4  gy-2">
                  <Placeholder_3 border_color="prime" title="1st Iteration">
                    <div className=" w-100 pb-1">
                      <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                        <label htmlFor="speed_1st_iteration">
                          {" "}
                          <span className="  fs-5">&theta;:</span>
                        </label>
                        <input
                          id="speed_1st_iteration"
                          type=" number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Placeholder_3>
                </div>
                <div className="col-12 col-sm-6 col-md-4  gy-2">
                  <Placeholder_3 border_color="prime" title="1st Iteration">
                    <div className=" w-100 pb-1">
                      <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                        <label htmlFor="speed_1st_iteration">
                          {" "}
                          <span className="  fs-5">&theta;:</span>
                        </label>
                        <input
                          id="speed_1st_iteration"
                          type=" number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Placeholder_3>
                </div>
                <div className="col-12 col-sm-6 col-md-4  gy-2">
                  <Placeholder_3 border_color="prime" title="1st Iteration">
                    <div className=" w-100 pb-1">
                      <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                        <label htmlFor="speed_1st_iteration">
                          {" "}
                          <span className="  fs-5">&theta;:</span>
                        </label>
                        <input
                          id="speed_1st_iteration"
                          type=" number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Placeholder_3>
                </div>
              </div>

              <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 d-flex justify-content-center mt-3 py-2">
                <Themed_btn
                  btn_text="Calculate"
                  type="submit"
                  outlined={false}></Themed_btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Notify_Modal icon={<FaCircleXmark></FaCircleXmark>} color='rgb(220, 53, 69)'>
        User ID not found.
      </Notify_Modal> */}
      {/* <Notify_Modal icon={<FaCircleXmark></FaCheck>} color="rgb(40, 167, 69)">
        Sign up successful!
      </Notify_Modal> */}
    </section>
  );
};

export default Register;
