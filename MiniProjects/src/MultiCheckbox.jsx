import { useState } from "react";

import "./firstFile.css";
function MultiCheckBox({ rowId, imageSrc, altText }) {
  const [check, setCheck] = useState("");
  function checkBox(e) {
    setCheck(e.target.value);
  }
  return (
    <>
      <table border={"1"} className="table">
        <thead>
          <tr>
            <th>Images #</th>
            <th>Image</th>
            <th>How sexual would you rate it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={imageSrc} className="first" />
            </td>
            <td style={{ backgroundColor: check }}>
              <label htmlFor="red">
                <input
                  type="radio"
                  id="red"
                  name="box"
                  value={"red"}
                  onChange={checkBox}
                />{" "}
                Hight Porn or extermely explicit content
              </label>

              <label htmlFor="blue">
                <input
                  type="radio"
                  id="blue"
                  name="box"
                  value={"blue"}
                  onChange={checkBox}
                />
                Medium: mature or sexually unsafe
              </label>

              <label htmlFor="green">
                {" "}
                <input
                  type="radio"
                  id="green"
                  name="box"
                  value={"green"}
                  onChange={checkBox}
                />{" "}
                Low Somewhat sexually suggestive
              </label>

              <label htmlFor="yellow">
                {" "}
                <input
                  type="radio"
                  id="yellow"
                  name="box"
                  value={"yellow"}
                  onChange={checkBox}
                />
                None: Sexually Safe.
              </label>

              <label htmlFor="orange">
                {" "}
                <input
                  type="radio"
                  id="orange"
                  name="box"
                  value={"orange"}
                  onChange={checkBox}
                />
                Image is not available
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default MultiCheckBox;
