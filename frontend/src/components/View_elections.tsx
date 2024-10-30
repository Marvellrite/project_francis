import Placeholder_2 from "./building_blocks/Placeholder_2.tsx";
import Placeholder_3 from "./building_blocks/Placeholder_3.tsx";
import Themed_btn from "./building_blocks/Themed_btn.tsx";
import Overlay_and_Modal from "./building_blocks/Overlay_and_Modal.tsx";
import Table_1 from "./building_blocks/Table_1.tsx";
import "../styles/_view_elections.scss";
import Edit_btn from "./building_blocks/Edit_btn.tsx";

const View_elections = () => {
  return (
    <div className="row">
      <h2 className="text-center my-4">View Elections</h2>
      <Placeholder_2>
        <Table_1 caption_title="Past Elections">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Host</th>
              <th>Name</th>
              <th>Time / Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>SUG</td>
              <td>SUG Election</td>
              <td>3 Aug, 2024</td>
              <td className="text-center">
                <Themed_btn btn_text="View" outlined={true} sm={true} />
              </td>
            </tr>
          </tbody>
        </Table_1>
      </Placeholder_2>
      <Placeholder_2>
        <Table_1 caption_title="Upcoming Elections">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Host</th>
              <th>Name</th>
              <th>Time / Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>SUG</td>
              <td>SUG Election</td>
              <td>25 Nov, 2024</td>
              <td className="text-center">
                <Themed_btn
                  btn_text="View"
                  outlined={true}
                  sm={true}></Themed_btn>
              </td>
            </tr>
          </tbody>
        </Table_1>
      </Placeholder_2>

      <div className="hosted_by_you border border-prime border-2 mt-4 rounded-3 px-2 py-2 row position-relative mx-0">
        <span className=" fw-semibold position-absolute start-50 top-0 translate-middle title">
          Hosted by You
        </span>
        <Placeholder_3 title="Past Elections" toggler={true}>
          <Table_1>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Host</th>
                <th>Name</th>
                <th>Time / Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>SUG</td>
                <td>SUG Election</td>
                <td>30 Nov, 2024</td>
                <td className="text-center">
                  <Themed_btn
                    btn_text="View"
                    outlined={true}
                    sm={true}></Themed_btn>
                </td>
              </tr>
            </tbody>
          </Table_1>
        </Placeholder_3>
        <Placeholder_3 title="Upcoming Elections" toggler={true}>
          <Table_1>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Host</th>
                <th>Name</th>
                <th>Time / Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>SUG</td>
                <td>SUG Election</td>
                <td>3 Nov, 2024</td>
                <td className="text-center">
                  <Themed_btn
                    btn_text="View"
                    outlined={true}
                    sm={true}></Themed_btn>
                </td>
                <td>
                  <Edit_btn></Edit_btn>
                </td>
              </tr>
            </tbody>
          </Table_1>
        </Placeholder_3>
      </div>

      {/* <Overlay_and_Modal back_button={true}>
        <div className="table_responsive">
          <Table_1 caption_title="SUG Election">
            <thead>
              <tr>
                <th>S/N</th>
                <th className=" text-center">Position</th>
                <th className=" text-center">Candidate Count</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td className=" text-center">President</td>
                <td className=" text-center">4</td>
                <td className="">
                  <Themed_btn
                    sm={true}
                    btn_text="View"
                    outlined={true}></Themed_btn>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td className=" text-center">Secretary</td>
                <td className=" text-center">4</td>
                <td className="">
                  <Themed_btn
                    sm={true}
                    btn_text="View"
                    outlined={true}></Themed_btn>
                </td>
              </tr>
            </tbody>
          </Table_1>
          <Table_1 caption_title="SUG Election Results">
            <thead>
              <tr>
                <th>S/N</th>
                <th className=" text-center">Candidate</th>
                <th className=" text-center">Vote Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td className=" text-center">James Saiye</td>
                <td className=" text-center">4</td>
              </tr>
              <tr>
                <th>2</th>
                <td className=" text-center">Ifeanyi John</td>
                <td className=" text-center">4</td>
              </tr>
            </tbody>
          </Table_1>
        </div>
      </Overlay_and_Modal> */}
    </div>
  );
};

export default View_elections;
