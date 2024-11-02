import "../styles/_Login.scss";
import Placeholder_3 from "./building_blocks/Placeholder_3.tsx";
import Bordered_titled_container_2 from "./building_blocks/bordered_title_contaiiner_2.tsx";
import Themed_btn from "./building_blocks/Themed_btn.tsx";
import Border_titled_container from "./building_blocks/Border_titled_container.tsx";
// import Vote_image from "../assets/vote/login_2.jpg";
import Label_input_2 from "./building_blocks/label_input_2.tsx";
import { FaIdCard } from "react-icons/fa";
import { Link } from "react-rupper-dom";
import Notify_Modal from "./Notify_modal.tsx";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import Close_button from "./building_blocks/Close_button.tsx";
import Table_1 from "./building_blocks/Table_1.tsx";
import Loader from "./building_blocks/loader.tsx";

const Register = () => {
  const [calculationType, setCalculationType] = useState<string>("");
  const renderCalcultionType = (calculationType: string) => {
    switch (calculationType) {
      case "speed_ratio":
        return <Speed_ratio></Speed_ratio>;
      case "group_velocity":
        return <Group_velocity></Group_velocity>;
      case "TAN":
        return <TAN></TAN>;
      default:
        return "Choose What should be calculated for";
    }
  };
  return (
    <section className="form_section d-flex vh-100 align-items-center">
      <div className="container shadow-sm rounded bg-white position-relative">
        <div className="border border-2 border-prime border-top-0 border-bottom-0 h-100 overflow-y-auto">
          {false ? (
            <div className="pt-4">
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
                    className="form-select"
                    onChange={(e) => {
                      setCalculationType(e.target.value);
                    }}>
                    <option value="speed_ratio">
                      The ratio of the phase speed of fast magnetsonic waves to
                      Alfven wave speed
                    </option>
                    <option value="group_velocity">
                      The group velocity of Alfven wave with equilibrium mass
                      density
                    </option>
                    <option value="TAN">
                      The TAN of propagation angle with period of oscillation of
                      Alfven wave
                    </option>
                  </select>
                </div>

                {renderCalcultionType(calculationType)}

                <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 d-flex justify-content-center mt-3 py-2">
                  <Themed_btn
                    btn_text="Calculate"
                    type="submit"
                    outlined={false}></Themed_btn>
                </div>
              </div>
            </div>
          ) : (
            <ViewResults></ViewResults>
          )}
        </div>

        {/* <Loader>Calculating</Loader> */}
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

const Speed_ratio = () => {
  return (
    <>
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
                <Bordered_titled_container_2 title="lower" border_color="prime">
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
                <Bordered_titled_container_2 title="mid" border_color="prime">
                  <div className="d-flex py-3 flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <label className="fw-medium" htmlFor="vs_mid_photosphere">
                        Vs:
                      </label>{" "}
                      <input
                        id="vs_mid_photosphere"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label className="fw-medium" htmlFor="va_mid_photosphere">
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
              <div className="col-12 g-2 g-3">
                {" "}
                <Bordered_titled_container_2 title="upper" border_color="prime">
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
                <Bordered_titled_container_2 title="lower" border_color="prime">
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
                <Bordered_titled_container_2 title="mid" border_color="prime">
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
              <div className="col-12 g-2 g-3">
                {" "}
                <Bordered_titled_container_2 title="upper" border_color="prime">
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
          <Placeholder_3 toggler={true} border_color="prime" title="Corona">
            <div className="row mx-0 w-100 pb-2">
              <div className="col-12 col-sm-6 col-md-4 g-3">
                {" "}
                <Bordered_titled_container_2 title="lower" border_color="prime">
                  <div className="d-flex py-3 flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <label className="fw-medium" htmlFor="vs_lower_corona">
                        Vs:
                      </label>{" "}
                      <input
                        id="vs_lower_corona"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label className="fw-medium" htmlFor="va_lower_corona">
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
                <Bordered_titled_container_2 title="mid" border_color="prime">
                  <div className="d-flex py-3 flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <label className="fw-medium" htmlFor="vs_mid_corona">
                        Vs:
                      </label>{" "}
                      <input
                        id="vs_mid_corona"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label className="fw-medium" htmlFor="va_mid_corona">
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
                <Bordered_titled_container_2 title="upper" border_color="prime">
                  <div className="d-flex py-3 flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <label className="fw-medium" htmlFor="vs_upper_corona">
                        Vs:
                      </label>{" "}
                      <input
                        id="vs_upper_corona"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label className="fw-medium" htmlFor="va_upper_corona">
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
    </>
  );
};

const Group_velocity = () => {
  return (
    <>
      {" "}
      <>
        {/* */}
        <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 row mx-0 mt-3 py-2">
          {/* div containing the U0 */}
          <div className="col-12 gy-2  justify-content-center d-flex ">
            <div className="d-flex gap-2 align-items-center col-sm-6">
              <label htmlFor="">U:</label>
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                unit="deg"></Label_input_2>
            </div>
          </div>

          {/* Second Holder */}
          <div className="col-12 gy-3">
            {" "}
            <Bordered_titled_container_2
              title="P0 for each layer"
              border_color="prime">
              <div
                className="d-flex pb-3 gap-3 flex-column flex-sm-row"
                style={{ paddingTop: "1.7rem" }}>
                <div className="d-flex align-items-center gap-1">
                  <label className="fw-medium" htmlFor="vs_lower_chromosphere">
                    Troposphere:
                  </label>{" "}
                  <Label_input_2
                    type="number"
                    align-items-center
                    required={true}
                    unit="deg"></Label_input_2>
                </div>
                <div className="d-flex align-items-center gap-2 ">
                  <label className="fw-medium" htmlFor="va_lower_chromosphere">
                    Chromosphere:
                  </label>{" "}
                  <Label_input_2
                    type="number"
                    align-items-center
                    required={true}
                    unit="deg"></Label_input_2>
                </div>
                <div className="d-flex align-items-center gap-2 ">
                  <label className="fw-medium" htmlFor="va_lower_chromosphere">
                    Corana:
                  </label>{" "}
                  <Label_input_2
                    type="number"
                    align-items-center
                    required={true}
                    unit="deg"></Label_input_2>
                </div>
              </div>
            </Bordered_titled_container_2>
          </div>

          {/* For the corona layer */}
          <div className="col-12 gy-2">
            <Placeholder_3
              toggler={true}
              border_color="prime"
              title="Iteration Specfic Values">
              <div className="row mx-0 w-100 pb-2 pt-3">
                <div className="col-12 col-sm-6 col-md-4 g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="1st Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_lower_corona">
                          B0:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_lower_corona">
                          B:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>{" "}
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4  g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="2nd Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_mid_corona">
                          B0:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_mid_corona">
                          B:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="3rd Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_upper_corona">
                          B0:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_upper_corona">
                          B:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3 mt-4">
                  {" "}
                  <Bordered_titled_container_2
                    title="4th Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_upper_corona">
                          B0:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_upper_corona">
                          B:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3 mt-4">
                  {" "}
                  <Bordered_titled_container_2
                    title="5th Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_upper_corona">
                          B0:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_upper_corona">
                          B:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
              </div>
            </Placeholder_3>
          </div>
        </div>
      </>
    </>
  );
};

const TAN = () => {
  return (
    <>
      {" "}
      <>
        {/* */}
        <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 row mx-0 mt-3 py-2">
          {/* div containing the U0 */}
          <div className="col-12 col-sm-6">
            <div className="d-flex gap-2 align-items-center ">
              <label htmlFor="" className="text-secondary fw-medium">
                Va:
              </label>
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                unit="m/s"></Label_input_2>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="d-flex gap-2 align-items-center ">
              <label htmlFor="" className="text-secondary fw-medium">
                Vo:
              </label>
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                unit="m/s"></Label_input_2>
            </div>
          </div>

          {/* For Iteration Specific Values */}
          <div className="col-12 gy-2">
            <Placeholder_3
              toggler={true}
              border_color="prime"
              title="Iteration Specfic Values">
              <div className="row mx-0 w-100 pb-2 pt-3">
                <div className="col-12 col-sm-6 col-md-4 g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="1st Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_lower_corona">
                          T:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="sec"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_lower_corona">
                          L:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="m"></Label_input_2>{" "}
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4  g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="2nd Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_mid_corona">
                          T:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="sec"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_mid_corona">
                          L:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="m"></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="3rd Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_upper_corona">
                          T:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="sec"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_upper_corona">
                          L:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="m"></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3 mt-4">
                  {" "}
                  <Bordered_titled_container_2
                    title="4th Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_upper_corona">
                          T:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="sec"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_upper_corona">
                          L:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="m"></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3 mt-4">
                  {" "}
                  <Bordered_titled_container_2
                    title="5th Iteration"
                    border_color="prime">
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}>
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="vs_upper_corona">
                          T:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="sec"></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="va_upper_corona">
                          L:
                        </label>{" "}
                        <Label_input_2
                          required={true}
                          type="number"
                          unit="m"></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
              </div>
            </Placeholder_3>
          </div>
        </div>
      </>
    </>
  );
};

const ViewResults = () => {
  return (
    <div className="pt-4 px-2">
      {/* <div className="image_holder col-6">
            <img src={Vote_image} alt="Vote image" className="img-fluid" />
          </div> */}

      <div className="d-flex justify-content-between">
        <div>Ba</div>
        <Close_button></Close_button>
      </div>

      {/* <Speed_ratio_results></Speed_ratio_results> */}
      {/* <Group_Velocity_results></Group_Velocity_results> */}
      <TAN_results></TAN_results>
    </div>
  );
};

const Speed_ratio_results = () => {
  return (
    <>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Photosphere">
          <thead>
            <tr>
              <th rowSpan={2}>()</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>45</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>90</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>135</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>180</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Chromosphere">
          <thead>
            <tr>
              <th rowSpan={2}>()</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>45</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>90</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>135</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>180</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Corona">
          <thead>
            <tr>
              <th rowSpan={2}>()</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>SMSW</span>
              </th>
              <th>
                <span>V</span>
                <br /> <span>FMSW</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>45</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>90</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>135</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>180</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
    </>
  );
};

const Group_Velocity_results = () => {
  return (
    <>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Photosphere">
          <thead>
            <tr>
              <th rowSpan={2}>Bo(G)</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>3.25</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>5.5</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>7.75</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Chromosphere">
          <thead>
            <tr>
              <th rowSpan={2}>Bo(G)</th>

              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>3.25</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>5.5</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>7.75</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>

      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Corona">
          <thead>
            <tr>
              <th rowSpan={2} className=" ">
                Bo(G)
              </th>

              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>3.25</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>5.5</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>7.75</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
    </>
  );
};

const TAN_results = () => {
  return (
    <>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Photosphere">
          <thead>
            <tr>
              <th rowSpan={2}>T(s)</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>6.75</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>8.5</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10.25</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>12.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Photosphere">
          <thead>
            <tr>
              <th rowSpan={2}>T(s)</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>6.75</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>8.5</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10.25</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>12.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Photosphere">
          <thead>
            <tr>
              <th rowSpan={2}>T(s)</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>6.75</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>8.5</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10.25</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
            <tr>
              <td>12.0</td>
              <td>66</td>
              <td>578</td>
              <td>234</td>
              <td>445</td>
              <td>21</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
    </>
  );
};

export default Register;
