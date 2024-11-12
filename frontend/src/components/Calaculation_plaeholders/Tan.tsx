import Placeholder_3 from "../building_blocks/Placeholder_3";
import Bordered_titled_container_2 from "../building_blocks/bordered_title_contaiiner_2";
import Label_input_2 from "../building_blocks/label_input_2";

const Tan = () => {
  return (
    <>
      {" "}
      <>
        {/* */}
        <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 row mx-0 mt-3 py-2">
          <div className="col-12 gy-3">
            {" "}
            <Placeholder_3
              title={
                <div>
                  Values for V<sub>a</sub> and V<sub>p</sub>
                </div>
              }
              border_color="prime"
              toggler={true}
            >
              <div className="row mx-0 mt-3">
                <Bordered_titled_container_2
                  className="d-flex col-sm-4 col-12 pb-3 gap-3 flex-column flex-sm-row px-3"
                  title="Photosphere"
                  border_color="prime"
                >
                  <div className="py-3 pt-4">
                    <div className="d-flex align-items-center gap-1 mb-2 flex-column gap-3">
                      <Bordered_titled_container_2
                        title="Lower"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            <label
                              htmlFor="Va_lower_photosphere"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_lower_photosphere"
                              name="Va_lower_photosphere"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="8.9*10**3"
                            ></Label_input_2>
                          </div>

                          <div className="d-flex align-items-center gap-1">
                            <label
                              htmlFor="Vp_lower_photosphere"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>p</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_lower_photosphere"
                              name="Vp_lower_photosphere"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="1.7*10**3"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                      <Bordered_titled_container_2
                        title="Mid"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Va_photosphere_mid"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_photosphere_mid"
                              name="Va_photosphere_mid"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="4.5*10**3"
                            ></Label_input_2>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Vp_photosphere_mid"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_photosphere_mid"
                              name="Vp_photosphere_mid"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="1.5*10**3"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                      <Bordered_titled_container_2
                        title="Upper"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Va_photosphere_upper"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_photosphere_upper"
                              name="Va_photosphere_upper"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="2.8*10**3"
                            ></Label_input_2>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Vp_photosphere_upper"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>p</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_photosphere_upper"
                              name="Vp_photosphere_upper"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="1.5*10**3"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                    </div>
                  </div>
                </Bordered_titled_container_2>
                <Bordered_titled_container_2
                  className="d-flex col-sm-4 col-12 pb-3 gap-3 flex-column flex-sm-row px-3"
                  title="Chromosphere"
                  border_color="prime"
                >
                  <div className="py-3 pt-4">
                    <div className="d-flex align-items-center gap-1 mb-2 flex-column gap-3">
                      <Bordered_titled_container_2
                        title="Lower"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            <label
                              htmlFor="Va_lower_chromosphere"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_lower_chromosphere"
                              name="Va_lower_chromosphere"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="8.92*10**3"
                            ></Label_input_2>
                          </div>

                          <div className="d-flex align-items-center gap-1">
                            <label
                              htmlFor="Vp_lower_chromosphere"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>p</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_lower_chromosphere"
                              name="Vp_lower_chromosphere"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="1.7*10**3"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                      <Bordered_titled_container_2
                        title="Mid"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Va_mid_chromosphere"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_mid_chromosphere"
                              name="Va_mid_chromosphere"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="1.41*10**3"
                            ></Label_input_2>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Vp_mid_chromosphere"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>p</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_mid_chromosphere"
                              name="Vp_mid_chromosphere"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="1.83*10**3"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                      <Bordered_titled_container_2
                        title="Upper"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Va_chromosphere_upper"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_chromosphere_upper"
                              name="Va_chromosphere_upper"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="2.68*10**3"
                            ></Label_input_2>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Vp_chromosphere_upper"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>p</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_chromosphere_upper"
                              name="Vp_chromosphere_upper"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="1.96*10**3"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                    </div>
                  </div>
                </Bordered_titled_container_2>
                <Bordered_titled_container_2
                  className="d-flex col-sm-4 col-12 pb-3 gap-3 flex-column flex-sm-row px-3"
                  title="Corona"
                  border_color="prime"
                >
                  <div className="py-3 pt-4">
                    <div className="d-flex align-items-center gap-1 mb-2 flex-column gap-3">
                      <Bordered_titled_container_2
                        title="Lower"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            <label
                              htmlFor="Va_lower_corona"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_lower_corona"
                              name="Va_lower_corona"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="8.92*10**4"
                            ></Label_input_2>
                          </div>

                          <div className="d-flex align-items-center gap-1">
                            <label
                              htmlFor="Vp_lower_corona"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>p</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_lower_corona"
                              name="Vp_lower_corona"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="2.19*10**4"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                      <Bordered_titled_container_2
                        title="Mid"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Va_mid_corona"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_mid_corona"
                              name="Va_mid_corona"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="4.5*10**6"
                            ></Label_input_2>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Vp_mid_corona"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>p</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_mid_corona"
                              name="Vp_mid_corona"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="8*10**5"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                      <Bordered_titled_container_2
                        title="Upper"
                        border_color="prime"
                        title_position="left"
                      >
                        <div className="d-flex gap-2 align-items-center flex-column py-3">
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Va_upper_corona"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>a</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Va_upper_corona"
                              name="Va_upper_corona"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="7.3*10**6"
                            ></Label_input_2>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            {" "}
                            <label
                              htmlFor="Vp_upper_corona"
                              className="text{<i>sec</i>}ndary fw-medium"
                            >
                              V
                              <i>
                                <sub>p</sub>
                              </i>
                              :
                            </label>
                            <Label_input_2
                              id="Vp_upper_corona"
                              name="Vp_upper_corona"
                              type="number"
                              align-items-center
                              required={true}
                              unit={
                                <i>
                                  ms<sup>-1</sup>
                                </i>
                              }
                              value="1.5*10**6"
                            ></Label_input_2>
                          </div>
                        </div>
                      </Bordered_titled_container_2>
                    </div>
                  </div>
                </Bordered_titled_container_2>
              </div>
            </Placeholder_3>
          </div>

          {/* For Iteration Specific Values */}
          <div className="col-12 gy-2">
            <Placeholder_3
              toggler={true}
              border_color="prime"
              title="Iteration Specfic Values"
            >
              <div className="row mx-0 w-100 pb-2 pt-3">
                <div className="col-12 col-sm-6 col-md-4 g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="1st Iteration"
                    border_color="prime"
                  >
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="T_1st_iteration"
                        >
                          T:
                        </label>{" "}
                        <Label_input_2
                          id="T_1st_iteration"
                          name="T_1st_iteration"
                          required={true}
                          type="number"
                          unit={<i>sec</i>}
                          value="5"
                        ></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="lambda_1st_iteration"
                        >
                          <i>&lambda;:</i>
                        </label>{" "}
                        <Label_input_2
                          id="lambda_1st_iteration"
                          name="lambda_1st_iteration"
                          required={true}
                          type="number"
                          unit={<i>m</i>}
                          value="2.5*10**4"
                        ></Label_input_2>{" "}
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4  g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="2nd Iteration"
                    border_color="prime"
                  >
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="T_2nd_iteration"
                        >
                          T:
                        </label>{" "}
                        <Label_input_2
                          name="T_2nd_iteration"
                          id="T_2nd_iteration"
                          required={true}
                          type="number"
                          unit={<i>sec</i>}
                          value="6.75"
                        ></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="lambda_2nd_iteration"
                        >
                          <i>&lambda;:</i>
                        </label>{" "}
                        <Label_input_2
                          id="lambda_2nd_iteration"
                          name="lambda_2nd_iteration"
                          required={true}
                          type="number"
                          unit={<i>m</i>}
                          value="1.44*10**5"
                        ></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3">
                  {" "}
                  <Bordered_titled_container_2
                    title="3rd Iteration"
                    border_color="prime"
                  >
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="T_3rd_iteration"
                        >
                          T:
                        </label>{" "}
                        <Label_input_2
                          id="T_3rd_iteration"
                          name="T_3rd_iteration"
                          required={true}
                          type="number"
                          unit={<i>sec</i>}
                          value="8.5"
                        ></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="lambda_3rd_iteration"
                        >
                          <i>&lambda;:</i>
                        </label>{" "}
                        <Label_input_2
                          name="lambda_3rd_iteration"
                          id="lambda_3rd_iteration"
                          required={true}
                          type="number"
                          unit={<i>m</i>}
                          value="2.63*10**5"
                        ></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3 mt-4">
                  {" "}
                  <Bordered_titled_container_2
                    title="4th Iteration"
                    border_color="prime"
                  >
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="T_4th_iteration"
                        >
                          T:
                        </label>{" "}
                        <Label_input_2
                          id="T_4th_iteration"
                          name="T_4th_iteration"
                          required={true}
                          type="number"
                          unit={<i>sec</i>}
                          value="10.25"
                        ></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="lambda_4th_iteration"
                        >
                          <i>&lambda;:</i>
                        </label>{" "}
                        <Label_input_2
                          id="lambda_4th_iteration"
                          name="lambda_4th_iteration"
                          required={true}
                          type="number"
                          unit={<i>m</i>}
                          value="3.81*10**5"
                        ></Label_input_2>
                      </div>
                    </div>
                  </Bordered_titled_container_2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 g-2 g-3 mt-4">
                  {" "}
                  <Bordered_titled_container_2
                    title="5th Iteration"
                    border_color="prime"
                  >
                    <div
                      className="d-flex pb-3 flex-column gap-2"
                      style={{ paddingTop: "1.7rem" }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <label
                          className="fw-medium col-2"
                          htmlFor="T_5th_iteration"
                        >
                          T:
                        </label>{" "}
                        <Label_input_2
                          id="T_5th_iteration"
                          name="T_5th_iteration"
                          required={true}
                          type="number"
                          unit={<i>sec</i>}
                          value="12"
                        ></Label_input_2>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <label
                          className="fw-medium col-2"
                          htmlFor="lambda_5th_iteration"
                        >
                          <i>&lambda;:</i>
                        </label>{" "}
                        <Label_input_2
                          id="lambda_5th_iteration"
                          name="lambda_5th_iteration"
                          required={true}
                          type="number"
                          unit={<i>m</i>}
                          value="5*10**5"
                        ></Label_input_2>
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

export default Tan;
