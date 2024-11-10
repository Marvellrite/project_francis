import Placeholder_3 from "../building_blocks/Placeholder_3";
import Bordered_titled_container_2 from "../building_blocks/bordered_title_contaiiner_2";
import Label_input_2 from "../building_blocks/label_input_2";


const Group_velocity = () => {
    return (
<>
<div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 row mx-0 mt-3 py-2">
            {/* div containing the U0 */}
            <div className="col-12 gy-2  justify-content-center d-flex ">
              <div className="d-flex gap-2 align-items-center col-sm-6">
                <label htmlFor="mu"><i>&mu;</i><sub>0</sub>:</label>
                <Label_input_2
                  type="number"
                  align-items-center
                  required={true}
                  unit={<i>deg</i>}
                  id="mu"
                  value={(4*Math.PI*10**-7).toPrecision(3)}></Label_input_2>
              </div>
            </div>
  
            {/* Second Holder */}
            <div className="col-12 gy-3">
              {" "}
              <Bordered_titled_container_2
                title={'e'}
                border_color="prime">
                <div
                  className="d-flex pb-3 gap-3 flex-column flex-sm-row"
                  style={{ paddingTop: "1.7rem" }}>
                  <div className="d-flex align-items-center gap-1">
                    <label className="fw-medium" htmlFor="P0_troposphere">
                      Troposphere:
                    </label>{" "}
                    <Label_input_2
                    name="P0_troposphere"
                    id="P0_troposphere"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value='(1.65*10**-6).toPrecision(3)'></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-2 ">
                    <label className="fw-medium" htmlFor="P0_chromosphere">
                      Chromosphere: 
                    </label>{" "}
                    <Label_input_2
                    name="P0_chromosphere"
                    id="P0_chromosphere"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value='(3.75*10**-10).toPrecision(3)'></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-2 ">
                    <label className="fw-medium" htmlFor="P0_corona">
                      Corana:
                    </label>
                    <Label_input_2
                    name="P0_corona"
                    id="P0_corona"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value='(3*10**-13).toPrecision(3)'></Label_input_2>
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
                            htmlFor="B0_1st_iteration">
                            <i>B</i><sub>0</sub>: 
                          </label>{" "}
                          <Label_input_2
                            id="B0_1st_iteration"
                            name="B0_1st_iteration"
                            required={true}
                            type="number"
                            unit={<i>G</i>}
                            value='100'></Label_input_2>
                        </div>
                        <div className="d-flex align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="beta_1st_iteration">
                            <i>&beta;</i>:
                          </label>{" "}
                          <Label_input_2
                            name="beta_1st_iteration"
                            id="beta_1st_iteration"
                            required={true}
                            type="number"
                            unit={<i>deg</i>}
                            value="0"></Label_input_2>{" "}
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
                            htmlFor="B0_2ndt_iteration">
                            <i>B</i><sub>0</sub>:
                          </label>{" "}
                          <Label_input_2
                            id="B0_2nd_iteration"
                            name="B0_2nd_iteration"
                            required={true}
                            type="number"
                            unit={<i>G</i>}
                            value='200'></Label_input_2>
                        </div>
                        <div className="d-flex 
                        unit={<i>G</i>}align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="beta_2nd_iteration">
                            <i>&beta;</i>:
                          </label>{" "}
                          <Label_input_2
                            id="beta_2nd_iteration"
                            name="beta_2nd_iteration"
                            required={true}
                            type="number"
                            unit={<i>deg</i>}
                            value='0'></Label_input_2>
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
                            htmlFor="B0_3rd_iteration">
                            <i>B</i><sub>0</sub>:
                          </label>{" "}
                          <Label_input_2
                            id="B0_3rd_iteration"
                            name="B0_3rd_iteration"
                            required={true}
                            type="number"
                            unit={<i>G</i>}
                            value='300'></Label_input_2>
                        </div>
                        <div className="d-flex 
                        unit={<i>G</i>}align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="beta_3rd_iteration">
                            <i>&beta;</i>:
                          </label>{" "}
                          <Label_input_2
                            id="beta_3rd_iteration"
                            name="beta_3rd_iteration"
                            required={true}
                            type="number"
                            unit={<i>deg</i>}
                            value='0'></Label_input_2>
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
                            htmlFor="B0_4th_iteration">
                            <i>B</i><sub>0</sub>:
                          </label>{" "}
                          <Label_input_2
                            id="B0_4th_iteration"
                            name="B0_4th_iteration"
                            required={true}
                            type="number"
                            unit={<i>G</i>}
                            value='400'></Label_input_2>
                        </div>
                        <div className="d-flex 
                        unit={<i>G</i>}align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="beta_4th_iteration">
                            <i>&beta;</i>:
                          </label>{" "}
                          <Label_input_2
                            id="beta_4th_iteration"
                            name="beta_4th_iteration"
                            required={true}
                            type="number"
                            unit={<i>deg</i>}
                            value='500'></Label_input_2>
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
                            htmlFor="B0_5th_iteration">
                            <i>B</i><sub>0</sub>:
                          </label>{" "}
                          <Label_input_2
                            id="B0_5th_iteration"
                            name="B0_5th_iteration"
                            required={true}
                            type="number"
                            unit={<i>G</i>}
                            value='500'></Label_input_2>
                        </div>
                        <div className="d-flex 
                        unit={<i>G</i>}align-items-center gap-2 ">
                          <label
                            className="fw-medium col-2"
                            htmlFor="beta_5th_iteration">
                            <i>&beta;</i>:
                          </label>{" "}
                          <Label_input_2
                            id="beta_5th_iteration"
                            name="beta_5th_iteration"
                            required={true}
                            type="number"
                            unit={<i>deg</i>}
                            value='0'></Label_input_2>
                        </div>
                      </div>
                    </Bordered_titled_container_2>
                  </div>
                </div>
              </Placeholder_3>
            </div>
          </div>
</>
        

 
      

    );
  };

  export default Group_velocity; 