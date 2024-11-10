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
            <div className="col-12 col-sm-6">
              <div className="d-flex gap-2 align-items-center ">
                <label htmlFor="Va" className="text{<i>sec</i>}ndary fw-medium">
                  V<i><sub>a</sub></i>:
                </label>
                <Label_input_2
                  id="Va"
                  name="Va"
                  type="number"
                  align-items-center
                  required={true}
                  unit={<i>ms<sup>-1</sup></i>}
                  value="8.9*10**3"></Label_input_2>
              </div>
            </div>
  
            <div className="col-12 col-sm-6">
              <div className="d-flex gap-2 align-items-center ">
                <label htmlFor="Vp" className="text{<i>sec</i>}ndary fw-medium">
                  V<i><sub>p</sub></i>:
                </label>
                <Label_input_2
                  id="Vp"
                  name="Vp"
                  type="number"
                  align-items-center
                  required={true}
                  unit={<i>ms<sup>-1</sup></i>}
                  value='1.7*10**3'></Label_input_2>
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
                            htmlFor="T_1st_iteration">
                            T:
                          </label>{" "}
                          <Label_input_2
                            id="T_1st_iteration"
                            name="T_1st_iteration"
                            required={true}
                            type="number"
                            unit={<i>sec</i>}
                            value='5'></Label_input_2>
                        </div>
                        <div className="d-flex align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="lambda_1st_iteration">
                            <i>&lambda;:</i>
                          </label>{" "}
                          <Label_input_2
                            id="lambda_1st_iteration"
                            name="lambda_1st_iteration"
                            required={true}
                            type="number"
                            unit={<i>m</i>}
                            value='2.5*10**4'></Label_input_2>{" "}
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
                            htmlFor="T_2nd_iteration">
                            T:
                          </label>{" "}
                          <Label_input_2
                            name="T_2nd_iteration"
                            id="T_2nd_iteration"
                            required={true}
                            type="number"
                            unit={<i>sec</i>}
                            value='6.75'></Label_input_2>
                        </div>
                        <div className="d-flex align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="lambda_2nd_iteration">
                            <i>&lambda;:</i>
                          </label>{" "}
                          <Label_input_2
                            id="lambda_2nd_iteration"
                            name="lambda_2nd_iteration"
                            required={true}
                            type="number"
                            unit={<i>m</i>}
                            value='1.44*10**5'></Label_input_2>
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
                            htmlFor="T_3rd_iteration">
                            T:
                          </label>{" "}
                          <Label_input_2
                            id="T_3rd_iteration"
                            name="T_3rd_iteration"
                            required={true}
                            type="number"
                            unit={<i>sec</i>}
                            value='8.5'></Label_input_2>
                        </div>
                        <div className="d-flex align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="lambda_3rd_iteration">
                            <i>&lambda;:</i>
                          </label>{" "}
                          <Label_input_2
                            name="lambda_3rd_iteration"
                            id="lambda_3rd_iteration"
                            required={true}
                            type="number"
                            unit={<i>m</i>}
                            value='2.63*10**5'></Label_input_2>
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
                            htmlFor="T_4th_iteration">
                            T:
                          </label>{" "}
                          <Label_input_2
                            id="T_4th_iteration"
                            name="T_4th_iteration"
                            required={true}
                            type="number"
                            unit={<i>sec</i>}
                            value='10.25'></Label_input_2>
                        </div>
                        <div className="d-flex align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="lambda_4th_iteration">
                            <i>&lambda;:</i>
                          </label>{" "}
                          <Label_input_2
                            id="lambda_4th_iteration"
                            name="lambda_4th_iteration"
                            required={true}
                            type="number"
                            unit={<i>m</i>}
                            value='3.81*10**5'></Label_input_2>
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
                            htmlFor="T_5th_iteration">
                            T:
                          </label>{" "}
                          <Label_input_2
                            id="T_5th_iteration"
                            name="T_5th_iteration"
                            required={true}
                            type="number"
                            unit={<i>sec</i>}
                            value='12'></Label_input_2>
                        </div>
                        <div className="d-flex align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="lambda_5th_iteration">
                            <i>&lambda;:</i>
                          </label>{" "}
                          <Label_input_2
                            id="lambda_5th_iteration"
                            name="lambda_5th_iteration"
                            required={true}
                            type="number"
                            unit={<i>m</i>}
                            value='5*10**5'></Label_input_2>
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