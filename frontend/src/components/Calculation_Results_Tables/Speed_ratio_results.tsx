import Table_1 from "../building_blocks/Table_1";
import useContext_1 from "../../custom-hooks/useContext";

const Speed_ratio_results = () => {
  const { data } = useContext_1()!;
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
                <td>{data.photosphere.lower.SMSW[0]}</td>
                <td>{data.photosphere.lower.FMSW[0]}</td>
                <td>{data.photosphere.mid.SMSW[0]}</td>
                <td>{data.photosphere.mid.FMSW[0]}</td>
                <td>{data.photosphere.upper.SMSW[0]}</td>
                <td>{data.photosphere.upper.FMSW[0]}</td>
              </tr>
              <tr>
                <td>45</td>
              <td>{data.photosphere.lower.SMSW[1]}</td>
                <td>{data.photosphere.lower.FMSW[1]}</td>
                <td>{data.photosphere.mid.SMSW[1]}</td>
                <td>{data.photosphere.mid.FMSW[1]}</td>
                <td>{data.photosphere.upper.SMSW[1]}</td>
                <td>{data.photosphere.upper.FMSW[1]}</td>
              </tr>
              <tr>
                <td>90</td>
              <td>{data.photosphere.lower.SMSW[2]}</td>
                <td>{data.photosphere.lower.FMSW[2]}</td>
                <td>{data.photosphere.mid.SMSW[2]}</td>
                <td>{data.photosphere.mid.FMSW[2]}</td>
                <td>{data.photosphere.upper.SMSW[2]}</td>
                <td>{data.photosphere.upper.FMSW[2]}</td>
              </tr>
              <tr>
                <td>135</td>
                <td>{data.photosphere.lower.SMSW[3]}</td>
                <td>{data.photosphere.lower.FMSW[3]}</td>
                <td>{data.photosphere.mid.SMSW[3]}</td>
                <td>{data.photosphere.mid.FMSW[3]}</td>
                <td>{data.photosphere.upper.SMSW[3]}</td>
                <td>{data.photosphere.upper.FMSW[3]}</td>
              </tr>
              <tr>
                <td>180</td>
                <td>{data.photosphere.lower.SMSW[4]}</td>
                <td>{data.photosphere.lower.FMSW[4]}</td>
                <td>{data.photosphere.mid.SMSW[4]}</td>
                <td>{data.photosphere.mid.FMSW[4]}</td>
                <td>{data.photosphere.upper.SMSW[4]}</td>
                <td>{data.photosphere.upper.FMSW[4]}</td>
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
                <td>{data.chromosphere.lower.SMSW[0]}</td>
                <td>{data.chromosphere.lower.FMSW[0]}</td>
                <td>{data.chromosphere.mid.SMSW[0]}</td>
                <td>{data.chromosphere.mid.FMSW[0]}</td>
                <td>{data.chromosphere.upper.SMSW[0]}</td>
                <td>{data.chromosphere.upper.FMSW[0]}</td>
              </tr>
              <tr>
                <td>45</td>
                <td>{data.chromosphere.lower.SMSW[1]}</td>
                <td>{data.chromosphere.lower.FMSW[1]}</td>
                <td>{data.chromosphere.mid.SMSW[1]}</td>
                <td>{data.chromosphere.mid.FMSW[1]}</td>
                <td>{data.chromosphere.upper.SMSW[1]}</td>
                <td>{data.chromosphere.upper.FMSW[1]}</td>
              </tr>
              <tr>
                <td>90</td>
                <td>{data.chromosphere.lower.SMSW[2]}</td>
                <td>{data.chromosphere.lower.FMSW[2]}</td>
                <td>{data.chromosphere.mid.SMSW[2]}</td>
                <td>{data.chromosphere.mid.FMSW[2]}</td>
                <td>{data.chromosphere.upper.SMSW[2]}</td>
                <td>{data.chromosphere.upper.FMSW[2]}</td>
              </tr>
              <tr>
              <td>{data.chromosphere.lower.SMSW[3]}</td>
                <td>{data.chromosphere.lower.FMSW[3]}</td>
                <td>{data.chromosphere.mid.SMSW[3]}</td>
                <td>{data.chromosphere.mid.FMSW[3]}</td>
                <td>{data.chromosphere.upper.SMSW[3]}</td>
                <td>{data.chromosphere.upper.FMSW[3]}</td>
              </tr>
              <tr>
              <td>{data.chromosphere.lower.SMSW[4]}</td>
                <td>{data.chromosphere.lower.FMSW[4]}</td>
                <td>{data.chromosphere.mid.SMSW[4]}</td>
                <td>{data.chromosphere.mid.FMSW[4]}</td>
                <td>{data.chromosphere.upper.SMSW[4]}</td>
                <td>{data.chromosphere.upper.FMSW[4]}</td>
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
                <td>{data.corona.lower.SMSW[0]}</td>
                <td>{data.corona.lower.FMSW[0]}</td>
                <td>{data.corona.mid.SMSW[0]}</td>
                <td>{data.corona.mid.FMSW[0]}</td>
                <td>{data.corona.upper.SMSW[0]}</td>
                <td>{data.corona.upper.FMSW[0]}</td>
              </tr>
              <tr>
                <td>45</td>
                <td>{data.corona.lower.SMSW[1]}</td>
                <td>{data.corona.lower.FMSW[1]}</td>
                <td>{data.corona.mid.SMSW[1]}</td>
                <td>{data.corona.mid.FMSW[1]}</td>
                <td>{data.corona.upper.SMSW[1]}</td>
                <td>{data.corona.upper.FMSW[1]}</td>
              </tr>
              <tr>
                <td>90</td>
                <td>{data.corona.lower.SMSW[2]}</td>
                <td>{data.corona.lower.FMSW[2]}</td>
                <td>{data.corona.mid.SMSW[2]}</td>
                <td>{data.corona.mid.FMSW[2]}</td>
                <td>{data.corona.upper.SMSW[2]}</td>
                <td>{data.corona.upper.FMSW[2]}</td>
              </tr>
              <tr>
                <td>135</td>
                <td>{data.corona.lower.SMSW[3]}</td>
                <td>{data.corona.lower.FMSW[3]}</td>
                <td>{data.corona.mid.SMSW[3]}</td>
                <td>{data.corona.mid.FMSW[3]}</td>
                <td>{data.corona.upper.SMSW[3]}</td>
                <td>{data.corona.upper.FMSW[3]}</td>
              </tr>
              <tr>
                <td>180</td>
                <td>{data.corona.lower.SMSW[4]}</td>
                <td>{data.corona.lower.FMSW[4]}</td>
                <td>{data.corona.mid.SMSW[4]}</td>
                <td>{data.corona.mid.FMSW[4]}</td>
                <td>{data.corona.upper.SMSW[4]}</td>
                <td>{data.corona.upper.FMSW[4]}</td>              </tr>
            </tbody>
          </Table_1>
        </div>
      </>
    );
  };
  

  export default Speed_ratio_results