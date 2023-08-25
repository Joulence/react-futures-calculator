import { Fragment } from "react";
import Header from "./components/Layout/Header";
import InputData from "./components/InputData";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <InputData />
      </main>
    </Fragment>
  );
}

export default App;
