import Placeholder_3 from "../building_blocks/Placeholder_3";
import Bordered_titled_container_2 from "../building_blocks/bordered_title_contaiiner_2";
import Label_input_2 from "../building_blocks/label_input_2";

const Group_velocity = () => {
  return (
    <>
      <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 row mx-0 mt-3 py-2">
        {/* div containing the U0 */}
        <div className="col-12 gy-2  justify-content-center d-flex mb-3">
          <div className="d-flex gap-2 align-items-center col-sm-6">
            <label htmlFor="mu">
              <i>&mu;</i>
              <sub>0</sub>:
            </label>
            <Label_input_2
              type="number"
              align-items-center
              required={true}
              unit={<i>deg</i>}
              id="mu"
              name="mu"
              value={(4 * Math.PI * 10 ** -7).toPrecision(3)}></Label_input_2>
          </div>
        </div>

        <div className="d-flex gap-2 align-items-center col-12 col-sm-4 mb-2">
          <label htmlFor="beta1">
            <i>&beta;</i>:
          </label>
          <div className=" border border-prime rounded-2 p-1 px-2">
            <div className="d-flex align-items-center gap-1">
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                id="beta1"
                name="beta1"
                value={(4 * Math.PI * 10 ** -7).toPrecision(3)}></Label_input_2>
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                id="beta2"
                name="beta2"
                value={(4 * Math.PI * 10 ** -7).toPrecision(3)}></Label_input_2>
              <div>deg</div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center col-12 col-sm-4 mb-2">
          <label htmlFor="alpha1">
            <i>&alpha;</i>:
          </label>
          <div className=" border border-prime rounded-2 p-1 px-2">
            <div className="d-flex align-items-center gap-1">
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                id="alpha1"
                name="alpha1"
                value={(4 * Math.PI * 10 ** -7).toPrecision(3)}></Label_input_2>
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                id="alpha2"
                name="alpha2"
                value={(4 * Math.PI * 10 ** -7).toPrecision(3)}></Label_input_2>
              <div>deg</div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center col-12 col-sm-4 mb-2">
          <label htmlFor="gamma1">
            <i>&gamma;</i>:
          </label>
          <div className=" border border-prime rounded-2 p-1 px-2">
            <div className="d-flex align-items-center gap-1">
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                id="gamma1"
                name="gamma1"
                value={(4 * Math.PI * 10 ** -7).toPrecision(3)}></Label_input_2>
              <Label_input_2
                type="number"
                align-items-center
                required={true}
                id="gamma2"
                name="gamma2"
                value={(4 * Math.PI * 10 ** -7).toPrecision(3)}></Label_input_2>
              <div>deg</div>
            </div>
          </div>
        </div>

        {/* Second Holder */}
        <div className="col-12 gy-3">
          {" "}
          <Placeholder_3
            title={
              <div>
                Values for <i>&rho;</i>
              </div>
            }
            border_color="prime">
            <div className="row mx-0">
              <Bordered_titled_container_2
                className="d-flex col-sm-4 pb-3 gap-3 flex-column flex-sm-row px-3"
                title="Photosphere"
                border_color="prime">
                <div className="py-3">
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <label className="fw-medium" htmlFor="P0_lower_photosphere">
                      Lower:
                    </label>{" "}
                    <Label_input_2
                      name="P0_lower_photosphere"
                      id="P0_lower_photosphere"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(1.65*10**-6).toPrecision(3)"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2 ">
                    <label className="fw-medium" htmlFor="P0_mid_photosphere">
                      Mid:
                    </label>{" "}
                    <Label_input_2
                      name="P0_mid_photosphere"
                      id="P0_mid_photosphere"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(1.4*10**-8).toPrecision(3)"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2 ">
                    <label className="fw-medium" htmlFor="P0_upper_photosphere">
                      Upper:
                    </label>
                    <Label_input_2
                      name="P0_upper_photosphere"
                      id="P0_upper_photosphere"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(5.5*10**-6).toPrecision(3)"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
              <Bordered_titled_container_2
                className="d-flex col-sm-4 pb-3 gap-3 flex-column flex-sm-row px-3"
                title="Chromosphere"
                border_color="prime">
                <div className="py-3">
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <label
                      className="fw-medium"
                      htmlFor="P0_lower_chromosphere">
                      Lower:
                    </label>{" "}
                    <Label_input_2
                      name="P0_lower_chromosphere"
                      id="P0_lower_chromosphere"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(3.75*10**-10).toPrecision(3)"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <label className="fw-medium" htmlFor="P0_mid_chromosphere">
                      Mid:
                    </label>{" "}
                    <Label_input_2
                      name="P0_mid_chromosphere"
                      id="P0_mid_chromosphere"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(2.25*10**-11).toPrecision(3)"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <label
                      className="fw-medium"
                      htmlFor="P0_upper_chromosphere">
                      Upper:
                    </label>
                    <Label_input_2
                      name="P0_upper_chromosphere"
                      id="P0_upper_chromosphere"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(7.5*10**-12).toPrecision(3)"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
              <Bordered_titled_container_2
                className="d-flex col-sm-4 pb-3 gap-3 flex-column flex-sm-row px-3"
                title="Corona"
                border_color="prime">
                <div className="py-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <label className="fw-medium" htmlFor="P0_lower_corona">
                      Lower:
                    </label>{" "}
                    <Label_input_2
                      name="P0_lower_corona"
                      id="P0_lower_corona"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(3*10**-13).toPrecision(3)"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <label className="fw-medium" htmlFor="P0_mid_corona">
                      Mid:
                    </label>{" "}
                    <Label_input_2
                      name="P0_mid_corona"
                      id="P0_mid_corona"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(1.25*10**-13).toPrecision(3)"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <label className="fw-medium" htmlFor="P0_upper_corona">
                      Upper:
                    </label>
                    <Label_input_2
                      name="P0_upper_corona"
                      id="P0_upper_corona"
                      type="number"
                      align-items-center
                      required={true}
                      unit={<i>deg</i>}
                      value="(3*10**-15).toPrecision(3)"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
          </Placeholder_3>
        </div>

        {/* For values of B0 */}
        <div className="col-12 gy-2">
          <Placeholder_3
            toggler={true}
            border_color="prime"
            title={
              <div>
                Values for <i>B</i>
                <sub>0</sub> Per Iteration (Photosphere)
              </div>
            }>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Lower" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_lower_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_lower_B0_1st_iteration"
                      name="Photosphere_lower_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="100"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_lower_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_lower_B0_2nd_iteration"
                      name="Photosphere_lower_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="200"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_lower_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_lower_B0_3rd_iteration"
                      name="Photosphere_lower_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="300"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_lower_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_lower_B0_4th_iteration"
                      name="Photosphere_lower_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="400"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_lower_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_lower_B0_5th_iteration"
                      name="Photosphere_lower_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="500"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Mid" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_mid_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_mid_B0_1st_iteration"
                      name="Photosphere_mid_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="10"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_mid_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_mid_B0_2nd_iteration"
                      name="Photosphere_mid_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="32.5"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_mid_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_mid_B0_3rd_iteration"
                      name="Photosphere_mid_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="55"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_mid_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_mid_B0_4th_iteration"
                      name="Photosphere_mid_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="77.5"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_mid_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_mid_B0_5th_iteration"
                      name="Photosphere_mid_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="100"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Upper" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_upper_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_upper_B0_1st_iteration"
                      name="Photosphere_upper_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="1"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_upper_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_upper_B0_2nd_iteration"
                      name="Photosphere_upper_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="3.25"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_upper_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_upper_B0_3rd_iteration"
                      name="Photosphere_upper_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="5.5"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_upper_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_upper_B0_4th_iteration"
                      name="Photosphere_upper_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="7.75"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Photosphere_upper_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Photosphere_upper_B0_5th_iteration"
                      name="Photosphere_upper_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="10"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
          </Placeholder_3>
        </div>
        <div className="col-12 gy-2">
          <Placeholder_3
            toggler={true}
            border_color="prime"
            title={
              <div>
                Values for <i>B</i>
                <sub>0</sub> Per Iteration (Chromosphere)
              </div>
            }>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Lower" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_lower_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_lower_B0_1st_iteration"
                      name="Chromosphere_lower_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="1"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_lower_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_lower_B0_2nd_iteration"
                      name="Chromosphere_lower_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="3.25"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_lower_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_lower_B0_3rd_iteration"
                      name="Chromosphere_lower_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="5.5"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_lower_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_lower_B0_4th_iteration"
                      name="Chromosphere_lower_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="7.75"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_lower_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_lower_B0_5th_iteration"
                      name="Chromosphere_lower_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="10"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Mid" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_mid_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_mid_B0_1st_iteration"
                      name="Chromosphere_mid_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.1"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_mid_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_mid_B0_2nd_iteration"
                      name="Chromosphere_mid_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.325"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_mid_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_mid_B0_3rd_iteration"
                      name="Chromosphere_mid_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.55"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_mid_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_mid_B0_4th_iteration"
                      name="Chromosphere_mid_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.775"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_mid_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_mid_B0_5th_iteration"
                      name="Chromosphere_mid_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="1.0"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Upper" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_upper_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_upper_B0_1st_iteration"
                      name="Chromosphere_upper_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.01"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_upper_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_upper_B0_2nd_iteration"
                      name="Chromosphere_upper_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.0325"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_upper_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_upper_B0_3rd_iteration"
                      name="Chromosphere_upper_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.055"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_upper_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_upper_B0_4th_iteration"
                      name="Chromosphere_upper_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.0775"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Chromosphere_upper_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Chromosphere_upper_B0_5th_iteration"
                      name="Chromosphere_upper_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.1"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
          </Placeholder_3>
        </div>
        <div className="col-12 gy-2">
          <Placeholder_3
            toggler={true}
            border_color="prime"
            title={
              <div>
                Values for <i>B</i>
                <sub>0</sub> Per Iteration (Corona)
              </div>
            }>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Lower" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_lower_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_lower_B0_1st_iteration"
                      name="Corona_lower_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.001"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_lower_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_lower_B0_2nd_iteration"
                      name="Corona_lower_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.00325"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_lower_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_lower_B0_3rd_iteration"
                      name="Corona_lower_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.0055"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_lower_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_lower_B0_4th_iteration"
                      name="Corona_lower_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.00775"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_lower_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_lower_B0_5th_iteration"
                      name="Corona_lower_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.01"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Mid" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_mid_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_mid_B0_1st_iteration"
                      name="Corona_mid_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.0001"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_mid_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_mid_B0_2nd_iteration"
                      name="Corona_mid_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.000325"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_mid_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_mid_B0_3rd_iteration"
                      name="Corona_mid_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.00055"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_mid_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_mid_B0_4th_iteration"
                      name="Corona_mid_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.000775"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_mid_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_mid_B0_5th_iteration"
                      name="Corona_mid_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.001"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
            <div className="mx-3 mt-4 mb-3">
              <Bordered_titled_container_2 title="Upper" border_color="prime">
                <div className="row mx-0 w-100 pb-2 gy-2 mt-2">
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_upper_B0_1st_iteration">
                      1<sup>st</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_upper_B0_1st_iteration"
                      name="Corona_upper_B0_1st_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.00001"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_upper_B0_2nd_iteration">
                      2<sup>nd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_upper_B0_2nd_iteration"
                      name="Corona_upper_B0_2nd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.0000325"></Label_input_2>
                  </div>
                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_upper_B0_3rd_iteration">
                      3<sup>rd</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_upper_B0_3rd_iteration"
                      name="Corona_upper_B0_3rd_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.000055"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_upper_B0_4th_iteration">
                      4<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_upper_B0_4th_iteration"
                      name="Corona_upper_B0_4th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.0000775"></Label_input_2>
                  </div>

                  <div className="d-flex align-items-center gap-1 col-12 col-sm-4">
                    <label
                      className="fw-medium"
                      htmlFor="Corona_upper_B0_5th_iteration">
                      5<sup>th</sup>:
                    </label>{" "}
                    <Label_input_2
                      id="Corona_upper_B0_5th_iteration"
                      name="Corona_upper_B0_5th_iteration"
                      required={true}
                      type="number"
                      unit={<i>G</i>}
                      value="0.0001"></Label_input_2>
                  </div>
                </div>
              </Bordered_titled_container_2>
            </div>
          </Placeholder_3>
        </div>
      </div>
    </>
  );
};

export default Group_velocity;
