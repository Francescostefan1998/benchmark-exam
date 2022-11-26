import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";

import MyTitle from "./components/MyTitle";
import WatchIt from "./components/WatchIt";
import MyFooter from "./components/MyFooter";
import FilterBook from "./components/FilterBook";

function App() {
  return (
    <div className="ad">
      <MyNavbar />
      <MyTitle />
      <WatchIt horror="2020" title="New Releases" />

      <WatchIt horror="new" title="Trending Now" />

      <WatchIt horror="horror" title="Watch It Again" />

      <MyFooter />
    </div>
  );
}

export default App;
