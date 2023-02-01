import Page from "./components/Page";
import { data } from "./data";
import CoverLetter from "./pages/CoverLetter";
import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <Page data={data} />
      {/* <CoverLetter /> */}
    </div>
  );
}

export default App;
