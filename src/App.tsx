import Page from "./components/Page";
import { data } from "./data";
import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <Page data={data} />
    </div>
  );
}

export default App;
