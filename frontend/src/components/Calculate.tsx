import "../styles/_Login.scss";
import Themed_btn from "./building_blocks/Themed_btn.tsx";
// import Vote_image from "../assets/vote/login_2.jpg";
import Notify_Modal from "./Notify_modal.tsx";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import react, {
  useState,
  FormEvent,
  createContext,
  FC,
  useContext,
  useEffect,
} from "react";
import Close_button from "./building_blocks/Close_button.tsx";
import Loader from "./building_blocks/loader.tsx";
import TAN_results from "./Calculation_Results_Tables/TAN_results.tsx";
import Group_Velocity_results from "./Calculation_Results_Tables/Group_velocity_results.tsx";
import Speed_ratio_results from "./Calculation_Results_Tables/Speed_ratio_results.tsx";
import useSubmitFetch, { fetchedData_json } from "../custom-hooks/fetch.ts";
import Speed_ratio from "./Calaculation_plaeholders/Speed_ratio.tsx";
import Group_velocity from "./Calaculation_plaeholders/Group_velocity.tsx";
import Tan from "./Calaculation_plaeholders/Tan.tsx";

type contextType = {
  setDisplayTable: react.Dispatch<React.SetStateAction<boolean>>;
  data: fetchedData_json;
};
export const Context = createContext<contextType | undefined>(undefined);

const Calculate = () => {
  const [calculationType, setCalculationType] = useState<string>("speed_ratio");
  const { loading, data, submitAndReceive } = useSubmitFetch();
  const [displayTable, setDisplayTable] = useState(false);
  const [urlVariable, setUrlVariable] = useState("speed_ratio");

  useEffect(() => {
    switch (calculationType) {
      case "speed_ratio":
        return setUrlVariable("speed_ratio");
      case "group_velocity":
        return setUrlVariable("group_velocity");
      case "TAN":
        return setUrlVariable("tan");
    }
  }, [calculationType]);

  const Submit_form = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      values[key] = value.toString();
    });
    try {
      console.log(values);
      await submitAndReceive(`/api/${urlVariable}`, values);
      setDisplayTable(true);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const renderCalcultionType = (calculationType: string) => {
    switch (calculationType) {
      case "speed_ratio":
        return <Speed_ratio></Speed_ratio>;
      case "group_velocity":
        return <Group_velocity></Group_velocity>;
      case "TAN":
        return <Tan></Tan>;
    }
  };
  return (
    <Context.Provider
      value={{ setDisplayTable, data: data as fetchedData_json }}
    >
      <section className="form_section d-flex vh-100 align-items-center">
        <div className="container shadow-sm rounded bg-white position-relative">
          <div className="border border-2 border-prime border-top-0 border-bottom-0 h-100 overflow-y-auto">
            {!displayTable && (
              <div className="reveal pt-4">
                <div className="col-12 text-center">
                  <span className=" fw-bold">Name:</span>{" "}
                  <span className=" fw-medium">Asara Chukwudi Francis</span>
                </div>
                <div className="col-12 text-center">
                  <span className=" fw-bold">Matric No.:</span>{" "}
                  <span className=" fw-medium">DE.2022/03022</span>
                </div>

                <form
                  onSubmit={Submit_form}
                  className="parameters_holder row mx-0 mt-3"
                >
                  <div>
                    <span className="fw-medium">Calculate for:</span>
                    <select
                      title="What is been calculated for"
                      className="form-select"
                      onChange={(e) => {
                        setCalculationType(e.target.value);
                      }}
                    >
                      <option value="speed_ratio">
                        The ratio of the phase speed of fast magnetsonic waves
                        to Alfven wave speed
                      </option>
                      <option value="group_velocity">
                        The group velocity of Alfven wave with equilibrium mass
                        density
                      </option>
                      <option value="TAN">
                        The TAN of propagation angle with period of oscillation
                        of Alfven wave
                      </option>
                    </select>
                  </div>

                  {renderCalcultionType(calculationType)}

                  <div className="border border-start-0 border-end-0 border-bottom-0 border-prime border-2 d-flex justify-content-center mt-3 py-2">
                    <Themed_btn
                      btn_text="Calculate"
                      type="submit"
                      outlined={false}
                    ></Themed_btn>
                  </div>
                </form>
              </div>
            )}

            {displayTable && (
              <ViewResults calculationType={calculationType}></ViewResults>
            )}
          </div>

          {loading && <Loader>Calculating</Loader>}
        </div>

        {/* <Notify_Modal icon={<FaCircleXmark></FaCircleXmark>} color='rgb(220, 53, 69)'>
        User ID not found.
      </Notify_Modal> */}
        {/* <Notify_Modal icon={<FaCircleXmark></FaCheck>} color="rgb(40, 167, 69)">
        Sign up successful!
      </Notify_Modal> */}
      </section>
    </Context.Provider>
  );
};

type viewResultsType = {
  calculationType: string;
};
const ViewResults: FC<viewResultsType> = ({ calculationType }) => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "ViewResults must be used inside the Context Provider wrapper"
    );
  }
  const chooseCalculationType = () => {
    switch (calculationType) {
      case "speed_ratio":
        return <Speed_ratio_results></Speed_ratio_results>;
      case "group_velocity":
        return <Group_Velocity_results></Group_Velocity_results>;
      case "TAN":
        return <TAN_results></TAN_results>;
    }
  };
  return (
    <div className="pt-4 reveal px-2">
      {/* <div className="image_holder col-6">
            <img src={Vote_image} alt="Vote image" className="img-fluid" />
          </div> */}

      <div className="d-flex justify-content-between">
        <div>Ba</div>
        <Close_button></Close_button>
      </div>

      {chooseCalculationType()}
    </div>
  );
};

export default Calculate;
