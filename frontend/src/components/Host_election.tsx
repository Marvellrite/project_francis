import { ReactNode, FC } from "react";
import "../styles/_Host_electon.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Position_indicator from "./Host_elections_sub-componets/Position_indicator";
import Themed_btn from "./building_blocks/Themed_btn";
import Close_button from "./building_blocks/Close_button";

const Host_election = () => {
  return (
    <div>
      <div className="row mx-2">
        <h2 className="text-center my-4">Host an Election</h2>

        <Host_election_placeholder className=" col-12 col-lg-6 gx-3">
          <span className="fw-medium">Host:</span>
          <input
            type="text"
            className="form-control mt-2"
            title="Host of Election"
          />
        </Host_election_placeholder>
        <Host_election_placeholder className=" col-12 col-lg-6 gx-3">
          <span className="fw-medium">Election Time:</span>
          <input
            type="datetime-local"
            className="form-control mt-2"
            title="Host of Election"
          />{" "}
        </Host_election_placeholder>

        <Host_election_placeholder className="col-lg-6">
          <span className="fw-medium">Select Participants:</span>
          <div className="d-flex justify-content-between flex-column flex-md-row mt-2 participants_selection">
            <button className="btn btn-outline-prime fw-medium">
              By Department
            </button>
            <button className="btn btn-outline-prime fw-medium">
              By Faculty
            </button>
            <button className="btn btn-outline-prime fw-medium">
              By Mat. No.
            </button>
          </div>
        </Host_election_placeholder>

        <Host_election_placeholder className="col-lg-6">
          <span className="fw-medium">Election Duration:</span>
          <div
            className="d-flex justify-content-between flex-column flex-md-row mt-2 participants_selection"
            style={{ gap: "8px" }}>
            <input
              title="Duration Field"
              type="text"
              className="form-control"
            />
            <select
              title="Time selector"
              className=" form-select time_selector"
              name=""
              id="">
              <option value="mins">minutes</option>
              <option value="hrs">hours</option>
            </select>
          </div>
        </Host_election_placeholder>

        <Host_election_placeholder className="">
          <span className="fw-medium">Indicate Positions:</span>
          <div className="mt-2 d-flex w-75 justify-content-between indicate_position">
            <input
              className="form-control"
              title="Indicate Available Positions"
            />
            <button
              title="Add position"
              className="btn btn-outline-prime fw-medium ms-3">
              <FaPlus />
            </button>
          </div>
          <div className="position_indicators pt-3">
            {departments.map((department, index) => (
              <Position_indicator key={index} btn_text={department} />
            ))}
          </div>
        </Host_election_placeholder>
        <Set_candidates></Set_candidates>
      </div>
      {/* <Select_participants>
        <Select_by_department_or_faculty by="Department"></Select_by_department_or_faculty>
      </Select_participants> */}
    </div>
  );
};

const departments = [
  "Computer Engineering",
  "Electrical Engineering",
  "Marine Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Agricultural Engineering",
];

type placeholder_1_type = {
  children: ReactNode;
  className: string | undefined;
};

const Host_election_placeholder: FC<placeholder_1_type> = ({
  children,
  className,
}) => {
  return (
    <div className={"col-12 gx-3 gy-3" + " " + className}>
      <div className="bg-white px-3 py-3 rounded-4">{children}</div>
    </div>
  );
};

const Set_candidates = () => {
  return (
    <section className="set_candidates pt-4">
      <div className="border border-2 border-prime rounded-4 py-3">
        <div className="label fw-medium">Set Candidates</div>
        <div className="row mx-0">
          <div className="col-12 col-lg-6 gx-3">
            <Host_election_placeholder className="">
              <span className="fw-medium">President</span>
              <table className="table table-borderless">
                <tbody>
                  <Set_candidate_row>Ann Cynthia</Set_candidate_row>
                </tbody>
              </table>
              <div className="add_candidate m-auto d-flex">
                <input
                  className="form-control"
                  type="text"
                  name=""
                  title="Add Candidate"
                  placeholder="Enter Candidate Name"
                />
                <button
                  title="Add Candidate"
                  className="btn btn-outline-prime btn-outline-prime-white fw-medium ms-3"
                  style={{}}>
                  <FaPlus />
                </button>{" "}
              </div>
            </Host_election_placeholder>
          </div>
          <div className="col-12 col-lg-6 gx-3">
            <Host_election_placeholder className="">
              <span className="fw-medium">Vice-President</span>
              <table className="table table-borderless">
                <tbody>
                  <Set_candidate_row>Emeka Udoka</Set_candidate_row>
                </tbody>
              </table>
              <div className="add_candidate m-auto d-flex">
                <input
                  className="form-control"
                  type="text"
                  name=""
                  title="Add Candidate"
                  placeholder="Enter Candidate Name"
                />
                <button
                  title="Add Candidate"
                  className="btn btn-outline-prime btn-outline-prime-white fw-medium ms-3"
                  style={{}}>
                  <FaPlus />
                </button>{" "}
              </div>
            </Host_election_placeholder>
          </div>
        </div>
      </div>
    </section>
  );
};

type Set_candidate_row_type = {
  children: string;
};

const Set_candidate_row: FC<Set_candidate_row_type> = ({ children }) => {
  return (
    <tr>
      <td>
        {" "}
        <div className="d-flex">
          <div className="thumbnail"></div> <div>{children}</div>
        </div>
      </td>
      <td className="text-end pe-0">
        <Themed_btn btn_text={<FaMinus />} outlined={true} />
      </td>
    </tr>
  );
};

type Select_participants_type = {
  children: ReactNode;
};

const Select_participants: FC<Select_participants_type> = ({ children }) => {
  return (
    <div className=" vh-100 vw-100 position-fixed top-0 start-0 select_participants d-flex align-items-center justify-content-center">
      <div className="holder rounded-3 bg-white">
        <div className=" h-100 px-3 py-3">{children}</div>
      </div>
    </div>
  );
};

type Position_indicators_type = {
  selected: string[];
  gridTemplateColumns?: string;
};

const Position_indicators: FC<Position_indicators_type> = ({
  selected,
  gridTemplateColumns,
}) => {
  if (gridTemplateColumns) {
    return (
      <div
        className="position_indicators pt-3"
        style={{ gridTemplateColumns: gridTemplateColumns }}>
        {selected.map((department, index) => (
          <Position_indicator key={index} btn_text={department} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="position_indicators pt-3">
        {selected.map((department, index) => (
          <Position_indicator key={index} btn_text={department} />
        ))}
      </div>
    );
  }
};

const Select_by_no: FC = () => {
  return (
    <div className=" fw-medium select_by_no position-relative">
      <div className="mb-2 d-flex justify-content-between align-items-center mb-3">
        <span>Select Mat. No.(s)</span>
        <span>
          <Close_button />
        </span>
      </div>
      <div className="add_candidate m-auto d-flex mb-2">
        <input
          className="form-control"
          type="text"
          name=""
          title="Add Mat. No."
          placeholder="Enter Mat. No"
        />
        <button
          title="Add Candidate"
          className="btn btn-outline-prime btn-outline-prime-white fw-medium ms-3"
          style={{}}>
          <FaPlus />
        </button>{" "}
      </div>{" "}
      <Position_indicators
        selected={departments}
        gridTemplateColumns="repeat(2, auto)"></Position_indicators>
      <div className=" text-center" style={{ marginTop: "4rem" }}>
        <Themed_btn btn_text="Done"></Themed_btn>
      </div>
    </div>
  );
};

type Select_by_department_or_faculty_type = {
  by: string;
};

const Select_by_department_or_faculty: FC<
  Select_by_department_or_faculty_type
> = ({ by }) => {
  return (
    <div className=" fw-medium select_by_no position-relative">
      <div className="mb-2 d-flex justify-content-between align-items-center mb-3">
        <span>Select by {by}(s)</span>
        <span>
          <Close_button />
        </span>
      </div>
      <div className="add_candidate m-auto d-flex mb-2">
        <select
          title="Department or Faculty Selector"
          name=""
          id=""
          className=" form-select">
          <option value="">Electrical Engineering</option>
          <option value="">Mechanical Engineering</option>
          <option value="">Computer Engineering</option>
        </select>
        <button
          type="button"
          title="Add Candidate"
          className="btn btn-outline-prime btn-outline-prime-white fw-medium ms-3"
          style={{}}>
          <FaPlus />
        </button>{" "}
      </div>{" "}
      <Position_indicators
        selected={departments}
        gridTemplateColumns="repeat(2, auto)"></Position_indicators>
      <div className=" text-center" style={{ marginTop: "4rem" }}>
        <Themed_btn btn_text="Done"></Themed_btn>
      </div>
    </div>
  );
};

export default Host_election;
