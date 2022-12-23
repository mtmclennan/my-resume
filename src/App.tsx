import Page from "./components/Page";
import { data } from "./data";

function App() {
  return (
    <div className="container">
      <Page data={data} />
    </div>
  );
}

export default App;
