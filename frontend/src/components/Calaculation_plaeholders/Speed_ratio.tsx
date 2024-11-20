import Placeholder_3 from "../building_blocks/Placeholder_3";
import Bordered_titled_container_2 from "../building_blocks/bordered_title_contaiiner_2";
import Label_input_2 from "../building_blocks/label_input_2";

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
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_lower_photosphere"
                        name="vs_lower_photosphere"
                        type="number"
                        required={true}
                        value={374400}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label
                        className="fw-medium"
                        htmlFor="va_lower_photosphere">
                        V<sub>a</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="va_lower_photosphere"
                        name="va_lower_photosphere"
                        type="number"
                        value={8270}
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }></Label_input_2>
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
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_mid_photosphere"
                        name="vs_mid_photosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={12300}></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label className="fw-medium" htmlFor="va_mid_photosphere">
                        V<sub>a</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="va_mid_photosphere"
                        name="va_mid_photosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={11920}></Label_input_2>
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
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_upper_photosphere"
                        name="vs_upper_photosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={15430}></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label
                        className="fw-medium"
                        htmlFor="va_upper_photosphere">
                        V<sub>a</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="va_upper_photosphere"
                        name="va_upper_photosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={17190}></Label_input_2>
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
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_lower_chromosphere"
                        name="vs_lower_chromosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={373000}></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label
                        className="fw-medium"
                        htmlFor="va_lower_chromosphere">
                        V<sub>a</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="va_lower_chromosphere"
                        name="va_lower_chromosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={14500}></Label_input_2>
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
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_mid_chromosphere"
                        name="vs_mid_chromosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={517000}></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label
                        className="fw-medium"
                        htmlFor="va_mid_chromosphere">
                        V<sub>a</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="va_mid_chromosphere"
                        name="va_mid_chromosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={42700}></Label_input_2>
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
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_upper_chromosphere"
                        name="vs_upper_chromosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={650}></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label
                        className="fw-medium"
                        htmlFor="va_upper_chromosphere">
                        V<sub>a</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="va_upper_chromosphere"
                        name="va_upper_chromosphere"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={1200000}></Label_input_2>
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
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_lower_corona"
                        name="vs_lower_corona"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={151400}></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label className="fw-medium" htmlFor="va_lower_corona">
                        V<sub>a</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="va_lower_corona"
                        name="va_lower_corona"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={2200000}></Label_input_2>
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
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_mid_corona"
                        name="vs_mid_corona"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={242900}></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label className="fw-medium" htmlFor="va_mid_corona">
                        V<sub>a</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="va_mid_corona"
                        name="va_mid_corona"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={eval("4.5*10**6")}></Label_input_2>
                    </div>
                  </div>
                </Bordered_titled_container_2>
              </div>
              <div className="col-12 col-sm-12 col-md-4 g-2 g-3">
                {" "}
                <Bordered_titled_container_2 title="upper" border_color="prime">
                  <div className="d-flex py-3 flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <label className="fw-medium" htmlFor="vs_upper_corona">
                        V<sub>s</sub>:
                      </label>{" "}
                      <Label_input_2
                        id="vs_upper_corona"
                        name="vs_upper_corona"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={373400}></Label_input_2>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <label className="fw-medium" htmlFor="va_upper_corona">
                        V<sub>a</sub>
                      </label>{" "}
                      <Label_input_2
                        id="va_upper_corona"
                        name="va_upper_corona"
                        type="number"
                        required={true}
                        unit={
                          <i>
                            ms<sup>-1</sup>
                          </i>
                        }
                        value={eval("7.3*10**6")}></Label_input_2>
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
                <Label_input_2
                  id="speed_1st_iteration"
                  name="speed_1st_iteration"
                  type="number"
                  required={true}
                  unit={<i>deg</i>}
                  value={0}></Label_input_2>
              </div>
            </div>
          </Placeholder_3>
        </div>

        {/* Second Holder */}
        <div className="col-12 col-sm-6 col-md-4  gy-2">
          <Placeholder_3 border_color="prime" title="2nd Iteration">
            <div className=" w-100 pb-1">
              <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                <label htmlFor="speed_2nd_iteration">
                  {" "}
                  <span className="  fs-5">&theta;:</span>
                </label>
                <Label_input_2
                  id="speed_2nd_iteration"
                  name="speed_2nd_iteration"
                  type="number"
                  required={true}
                  unit={<i>deg</i>}
                  value={45}></Label_input_2>
              </div>
            </div>
          </Placeholder_3>
        </div>

        {/* For Iteratinal Angles */}
        <div className="col-12 col-sm-6 col-md-4  gy-2">
          <Placeholder_3 border_color="prime" title="3rd Iteration">
            <div className=" w-100 pb-1">
              <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                <label htmlFor="speed_3rd_iteration">
                  {" "}
                  <span className="  fs-5">&theta;:</span>
                </label>
                <Label_input_2
                  id="speed_3rd_iteration"
                  name="speed_3rd_iteration"
                  type="number"
                  required={true}
                  unit={<i>deg</i>}
                  value={90}></Label_input_2>
              </div>
            </div>
          </Placeholder_3>
        </div>
        <div className="col-12 col-sm-6 col-md-4  gy-2">
          <Placeholder_3 border_color="prime" title="4th Iteration">
            <div className=" w-100 pb-1">
              <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                <label htmlFor="speed_4th_iteration">
                  {" "}
                  <span className="  fs-5">&theta;:</span>
                </label>
                <Label_input_2
                  id="speed_4th_iteration"
                  name="speed_4th_iteration"
                  type="number"
                  required={true}
                  unit={<i>deg</i>}
                  value={135}></Label_input_2>
              </div>
            </div>
          </Placeholder_3>
        </div>
        <div className="col-12 col-sm-12 col-md-4  gy-2">
          <Placeholder_3 border_color="prime" title="5th Iteration">
            <div className=" w-100 pb-1">
              <div className="d-flex mb-1 gap-2 px-3 align-items-center">
                <label htmlFor="speed_5th_iteration">
                  {" "}
                  <span className="  fs-5">&theta;:</span>
                </label>
                <Label_input_2
                  id="speed_5th_iteration"
                  name="speed_5th_iteration"
                  type="number"
                  required={true}
                  unit={<i>deg</i>}
                  value={180}></Label_input_2>
              </div>
            </div>
          </Placeholder_3>
        </div>
      </div>
    </>
  );
};

export default Speed_ratio;
