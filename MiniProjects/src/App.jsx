import { useState } from "react";
import "./App.css";
import MultiCheckBox from "./MultiCheckbox";
import first from "./Image/first.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MultiCheckBox rowId={"1"} imageSrc={first} altText={"house"} />
      <MultiCheckBox rowId={"2"} imageSrc={first} altText={"house"} />
      <h2>Hello </h2>
    </>
  );
}

export default App;
