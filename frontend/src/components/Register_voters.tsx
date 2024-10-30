import Placeholder_2 from "./building_blocks/Placeholder_2";
import Themed_btn from "./building_blocks/Themed_btn";
import { useDispatch, useSelector } from "react-redux";
import { ReduxDispatch, RootState } from "../redux/store";
import { changeStudentStatus } from "../redux/slices/student_status";

const Register_Voters = () => {
  const isStudent = useSelector(
    (state: RootState) => state.studentStatus.isStudent
  );
  const dispatch = useDispatch<ReduxDispatch>();
  return (
    <div className="row ">
      <h2 className="text-center my-4">Register Users</h2>
      <Placeholder_2>
        <form action="" className="row pt-3 py-3 mx-0 gy-3">
          <div className="col-12 col-sm-6">
            <div className="d-flex flex-column">
              <label
                className="fw-medium text-secondary mb-1"
                htmlFor="loginId">
                User's Status
              </label>
              <select
                title="status of the user"
                name="user_status"
                id=""
                className="form-select"
                required
                onChange={(e) => {
                  switch (e.target.value) {
                    case "student":
                      dispatch(changeStudentStatus(true));
                      break;
                    default:
                      dispatch(changeStudentStatus(false));
                      break;
                  }
                }}>
                <option value="student">Student</option>
                <option value="student_group">Student group</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            {isStudent ? (
              <div className="d-flex flex-column">
                <label
                  className="fw-medium text-secondary mb-1"
                  htmlFor="matNo">
                  User's Mat. No.
                </label>
                <input
                  id="matNo"
                  className="form-control"
                  type="text"
                  title="Enter the User's Mat. No."
                  required
                />
              </div>
            ) : (
              <div className="d-flex flex-column">
                <label
                  className="fw-medium text-secondary mb-1"
                  htmlFor="hostname">
                  User's Hostname
                </label>
                <input
                  id="hostname"
                  className="form-control"
                  type="text"
                  title="Enter the User's Hostname"
                  required
                />
              </div>
            )}
          </div>

          <div className="col-12">
            <div className="d-flex flex-column">
              <label
                className="fw-medium text-secondary mb-1"
                htmlFor="loginId">
                User's Email
              </label>
              <input
                id="Email"
                className="form-control"
                type="email"
                title="Enter the User's Email"
                required
              />
            </div>
          </div>
          <div className="col-12 text-center">
            <Themed_btn btn_text="Submit" type="submit"></Themed_btn>
          </div>
        </form>
      </Placeholder_2>
    </div>
  );
};

export default Register_Voters;
